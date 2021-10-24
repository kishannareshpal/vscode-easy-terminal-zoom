# Easy Terminal Zoom

![Icon](./easy_terminal_zoom.png)

VSCode extension to control the terminal's font-size with keyboard shortcuts when the terminal is focused.

#### Motivation

<sup>
By default, in order to increase/decrease the font size in VS Code you need to adjust the `terminal.integrated.fontSize` value manually from settings.
</sup>

#### Included keyboard shortcuts (Keymaps)

| Action             | Mac                           | Windows or Linux               |
| ------------------ | ----------------------------- | ------------------------------ |
| Increase font size | <kbd>Cmd</kbd> + <kbd>=</kbd> | <kbd>Ctrl</kbd> + <kbd>=</kbd> |
| Decrease font size | <kbd>Cmd</kbd> + <kbd>-</kbd> | <kbd>Ctrl</kbd> + <kbd>-</kbd> |

> Note: These keymaps are only activated for the extension when a Terminal has active focus.

#### Requirements

-   VS Code 1.40+

#### Settings

| Key                     | Description                                                                  |
| ----------------------- | ---------------------------------------------------------------------------- |
| `easyTerminalZoom.step` | The amount by which the font size is increased or decreased. Default is `1`. |

#### Author

Kishan Jadav • kishan_jadav@hotmail.com

#### License

[MIT](./LICENSE.md)
