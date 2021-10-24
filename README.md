# Easy Terminal Zoom

![Icon](./easy_terminal_zoom.png)

VSCode extension to control the terminal's font-size with keyboard shortcuts when the terminal is focused.

#### Motivation

<sup>By default, in order to increase/decrease the font size in VSCode is by adjusting the `terminal.integrated.fontSize` value manually.
The other way to achieve this is by [zooming in/out the editor](https://code.visualstudio.com/docs/editor/accessibility#_zoom), which is not ideal for me, as I only needed to increase/decrease the terminal font size and not the entire editor.</sup>

#### Included keyboard shortcuts (Keymaps)

| Action             | Mac                           | Windows or Linux               |
| ------------------ | ----------------------------- | ------------------------------ |
| Increase font size | <kbd>Cmd</kbd> + <kbd>=</kbd> | <kbd>Ctrl</kbd> + <kbd>=</kbd> |
| Decrease font size | <kbd>Cmd</kbd> + <kbd>-</kbd> | <kbd>Ctrl</kbd> + <kbd>-</kbd> |

> Note: These keymaps are only activated for the extension when a Terminal has active focus.

#### Settings

| Key                     | Description                                                                  |
| ----------------------- | ---------------------------------------------------------------------------- |
| `easyTerminalZoom.step` | The amount by which the font size is increased or decreased. Default is `1`. |

#### License

[MIT](./LICENSE.md)
