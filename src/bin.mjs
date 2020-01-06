#!/usr/bin/env node

import { cli } from '@magic/cli'

import format from './index.mjs'

const { args } = cli({
  options: [
    ['--write', '--w', '-w'],
    ['--exclude', '--e', '-e'],
    ['--file-types', '--fileTypes', '-f'],
    ['--config', '--conf', '-c'],
  ],
  default: {
    '--list-different': [],
    '--file-types': ['mjs', 'json'],
    '--exclude': ['node_modules', '.nyc_output'],
  },
  help: {
    name: '@magic/test f',
    header: 'format js code using prettier',
    options: {
      '--write': 'overwrite files in place',
      '--file-types': 'file types to format.',
      '--conf': 'path to config file',
      '--exclude': 'directories and files to exclude.',
    },
    example: `
f     - only --list-different files
f -w  - overwrite files in place
`.trim(),
  },
})

format(args)
