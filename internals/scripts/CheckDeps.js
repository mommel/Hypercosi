#!/usr/bin/env node

const fs = require('fs')
const cp = require('child_process')

const BUILT_IN_DEPS = [
  'child_process',
  'electron',
  'fs',
  'os',
  'path',
]
const EXECUTABLE_DEPS = ['gh-release', 'standard']

// Scans codebase for missing or unused dependencies. Exits with code 0 on success.
const main = () => {
  if (process.platform === 'win32') {
    console.error('Sorry, check-deps only works on Mac and Linux')
    return
  }

  const usedDeps = findUsedDeps()
  const packageDeps = findPackageDeps()

  const missingDeps = usedDeps.filter(
    dep => !packageDeps.includes(dep) && !BUILT_IN_DEPS.includes(dep),
  )
  const unusedDeps = packageDeps.filter(
    dep => !usedDeps.includes(dep) && !EXECUTABLE_DEPS.includes(dep),
  )

  if (missingDeps.length > 0) {
    console.error('Missing package dependencies: ' + missingDeps)
  }
  if (unusedDeps.length > 0) {
    console.error('Unused package dependencies: ' + unusedDeps)
  }
  if (missingDeps.length + unusedDeps.length > 0) {
    process.exitCode = 1
  }
}

// Finds all dependencies specified in `package.json`
const findPackageDeps = () => {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'))
  const deps = Object.keys(pkg.dependencies)
  const devDeps = Object.keys(pkg.devDependencies)
  const optionalDeps = Object.keys(pkg.optionalDependencies)
  return [].concat(deps, devDeps, optionalDeps)
}

// Finds all dependencies that used with `require()`
const findUsedDeps = () => {
  let stdout = cp.execSync('./bin/list-deps.sh')
  return stdout
    .toString()
    .trim()
    .split('\n')
}

main()
