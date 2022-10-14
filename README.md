recastify
=================

Web Component transfiguration tool. Convert Web Components in a multitude of formats to other formats.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/recastify.svg)](https://npmjs.org/package/recastify)
[![Downloads/week](https://img.shields.io/npm/dw/recastify.svg)](https://npmjs.org/package/recastify)
[![License](https://img.shields.io/npm/l/recastify.svg)](https://github.com/inlinejs/recastify/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g recastify
$ recastify COMMAND
running command...
$ recastify (--version)
recastify/0.0.5 darwin-x64 node-v18.8.0
$ recastify --help [COMMAND]
USAGE
  $ recastify COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`recastify help [COMMAND]`](#recastify-help-command)
* [`recastify outline`](#recastify-outline)
* [`recastify plugins`](#recastify-plugins)
* [`recastify plugins:install PLUGIN...`](#recastify-pluginsinstall-plugin)
* [`recastify plugins:inspect PLUGIN...`](#recastify-pluginsinspect-plugin)
* [`recastify plugins:install PLUGIN...`](#recastify-pluginsinstall-plugin-1)
* [`recastify plugins:link PLUGIN`](#recastify-pluginslink-plugin)
* [`recastify plugins:uninstall PLUGIN...`](#recastify-pluginsuninstall-plugin)
* [`recastify plugins:uninstall PLUGIN...`](#recastify-pluginsuninstall-plugin-1)
* [`recastify plugins:uninstall PLUGIN...`](#recastify-pluginsuninstall-plugin-2)
* [`recastify plugins update`](#recastify-plugins-update)

## `recastify help [COMMAND]`

Display help for recastify.

```
USAGE
  $ recastify help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for recastify.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.14/src/commands/help.ts)_

## `recastify outline`

Converts an Outline component to InlineJS.

```
USAGE
  $ recastify outline

DESCRIPTION
  Converts an Outline component to InlineJS.

EXAMPLES
  $ recastify outline
```

_See code: [dist/commands/outline.ts](https://github.com/ininejs/recastify/blob/v0.0.5/dist/commands/outline.ts)_

## `recastify plugins`

List installed plugins.

```
USAGE
  $ recastify plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ recastify plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.1/src/commands/plugins/index.ts)_

## `recastify plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ recastify plugins:install PLUGIN...

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
  $ recastify plugins add

EXAMPLES
  $ recastify plugins:install myplugin 

  $ recastify plugins:install https://github.com/someuser/someplugin

  $ recastify plugins:install someuser/someplugin
```

## `recastify plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ recastify plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ recastify plugins:inspect myplugin
```

## `recastify plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ recastify plugins:install PLUGIN...

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
  $ recastify plugins add

EXAMPLES
  $ recastify plugins:install myplugin 

  $ recastify plugins:install https://github.com/someuser/someplugin

  $ recastify plugins:install someuser/someplugin
```

## `recastify plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ recastify plugins:link PLUGIN

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
  $ recastify plugins:link myplugin
```

## `recastify plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ recastify plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ recastify plugins unlink
  $ recastify plugins remove
```

## `recastify plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ recastify plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ recastify plugins unlink
  $ recastify plugins remove
```

## `recastify plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ recastify plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ recastify plugins unlink
  $ recastify plugins remove
```

## `recastify plugins update`

Update installed plugins.

```
USAGE
  $ recastify plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
