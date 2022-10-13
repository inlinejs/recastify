oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g recastify
$ inline COMMAND
running command...
$ inline (--version)
recastify/0.0.1 darwin-x64 node-v18.7.0
$ inline --help [COMMAND]
USAGE
  $ inline COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`inline help [COMMAND]`](#inline-help-command)
* [`inline outline`](#inline-outline)
* [`inline plugins`](#inline-plugins)
* [`inline plugins:install PLUGIN...`](#inline-pluginsinstall-plugin)
* [`inline plugins:inspect PLUGIN...`](#inline-pluginsinspect-plugin)
* [`inline plugins:install PLUGIN...`](#inline-pluginsinstall-plugin-1)
* [`inline plugins:link PLUGIN`](#inline-pluginslink-plugin)
* [`inline plugins:uninstall PLUGIN...`](#inline-pluginsuninstall-plugin)
* [`inline plugins:uninstall PLUGIN...`](#inline-pluginsuninstall-plugin-1)
* [`inline plugins:uninstall PLUGIN...`](#inline-pluginsuninstall-plugin-2)
* [`inline plugins update`](#inline-plugins-update)

## `inline help [COMMAND]`

Display help for inline.

```
USAGE
  $ inline help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for inline.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.14/src/commands/help.ts)_

## `inline outline`

Converts an Outline component to InlineJS.

```
USAGE
  $ inline outline

DESCRIPTION
  Converts an Outline component to InlineJS.

EXAMPLES
  $ inline outline
```

_See code: [dist/commands/outline.ts](https://github.com/ininejs/recastify/blob/v0.0.1/dist/commands/outline.ts)_

## `inline plugins`

List installed plugins.

```
USAGE
  $ inline plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ inline plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.1/src/commands/plugins/index.ts)_

## `inline plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ inline plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ inline plugins add

EXAMPLES
  $ inline plugins:install myplugin 

  $ inline plugins:install https://github.com/someuser/someplugin

  $ inline plugins:install someuser/someplugin
```

## `inline plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ inline plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ inline plugins:inspect myplugin
```

## `inline plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ inline plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ inline plugins add

EXAMPLES
  $ inline plugins:install myplugin 

  $ inline plugins:install https://github.com/someuser/someplugin

  $ inline plugins:install someuser/someplugin
```

## `inline plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ inline plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ inline plugins:link myplugin
```

## `inline plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ inline plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ inline plugins unlink
  $ inline plugins remove
```

## `inline plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ inline plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ inline plugins unlink
  $ inline plugins remove
```

## `inline plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ inline plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ inline plugins unlink
  $ inline plugins remove
```

## `inline plugins update`

Update installed plugins.

```
USAGE
  $ inline plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
