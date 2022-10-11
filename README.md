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
$ npm install -g iswap
$ convert COMMAND
running command...
$ convert (--version)
iswap/0.0.0 darwin-x64 node-v18.7.0
$ convert --help [COMMAND]
USAGE
  $ convert COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`convert hello PERSON`](#convert-hello-person)
* [`convert hello world`](#convert-hello-world)
* [`convert help [COMMAND]`](#convert-help-command)
* [`convert plugins`](#convert-plugins)
* [`convert plugins:install PLUGIN...`](#convert-pluginsinstall-plugin)
* [`convert plugins:inspect PLUGIN...`](#convert-pluginsinspect-plugin)
* [`convert plugins:install PLUGIN...`](#convert-pluginsinstall-plugin-1)
* [`convert plugins:link PLUGIN`](#convert-pluginslink-plugin)
* [`convert plugins:uninstall PLUGIN...`](#convert-pluginsuninstall-plugin)
* [`convert plugins:uninstall PLUGIN...`](#convert-pluginsuninstall-plugin-1)
* [`convert plugins:uninstall PLUGIN...`](#convert-pluginsuninstall-plugin-2)
* [`convert plugins update`](#convert-plugins-update)

## `convert hello PERSON`

Say hello

```
USAGE
  $ convert hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/inlinejs/iswap/blob/v0.0.0/dist/commands/hello/index.ts)_

## `convert hello world`

Say hello world

```
USAGE
  $ convert hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ convert hello world
  hello world! (./src/commands/hello/world.ts)
```

## `convert help [COMMAND]`

Display help for convert.

```
USAGE
  $ convert help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for convert.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.14/src/commands/help.ts)_

## `convert plugins`

List installed plugins.

```
USAGE
  $ convert plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ convert plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.1/src/commands/plugins/index.ts)_

## `convert plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ convert plugins:install PLUGIN...

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
  $ convert plugins add

EXAMPLES
  $ convert plugins:install myplugin 

  $ convert plugins:install https://github.com/someuser/someplugin

  $ convert plugins:install someuser/someplugin
```

## `convert plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ convert plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ convert plugins:inspect myplugin
```

## `convert plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ convert plugins:install PLUGIN...

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
  $ convert plugins add

EXAMPLES
  $ convert plugins:install myplugin 

  $ convert plugins:install https://github.com/someuser/someplugin

  $ convert plugins:install someuser/someplugin
```

## `convert plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ convert plugins:link PLUGIN

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
  $ convert plugins:link myplugin
```

## `convert plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ convert plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ convert plugins unlink
  $ convert plugins remove
```

## `convert plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ convert plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ convert plugins unlink
  $ convert plugins remove
```

## `convert plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ convert plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ convert plugins unlink
  $ convert plugins remove
```

## `convert plugins update`

Update installed plugins.

```
USAGE
  $ convert plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
