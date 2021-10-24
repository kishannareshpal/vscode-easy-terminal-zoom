const vscode = require('vscode');

/**
 * Constants
 */
// Whether the settings are changed on Global or Workspace level
const IS_GLOBAL_CONFIG = true;
const MINIMUM_FONT_SIZE = 6;
const MAXIMUM_FONT_SIZE = 100;


/**
 * Accessors
 */
const registerCommand = vscode.commands.registerCommand;

// Settings Helper methods
/**
 * Return the current step value for each font size increment/decrement
 * 
 * @default 1
 * @returns {number} step
 */
const getCurrentStep = () => {
    return vscode.workspace.getConfiguration("easyTerminalZoom").get("step");
}


// Command Helper methods
/**
 * Return the current integrated terminal fontSize.
 * 
 * @returns {number} 
 */
const getCurrentTerminalFontSize = () => {
    return vscode.workspace.getConfiguration("terminal.integrated").get("fontSize");
}

/**
 * Increments the integrated terminal font size
 * 
 * @returns {number} incremented terminal font size number
 */
const increment = () => {
    const currentFontSize = getCurrentTerminalFontSize();
    let step = getCurrentStep();
    if (typeof step == "string")
    {
        // Convert the string into number
        step = Number(step)
    }

    const newFontSize = currentFontSize + step
    return (newFontSize > MAXIMUM_FONT_SIZE) ? MAXIMUM_FONT_SIZE : newFontSize;
}

/**
 * Decrements the integrated terminal font size
 * 
 * @returns {number} decremented terminal font size number
 */
const decrement = () => {
    const currentFontSize = getCurrentTerminalFontSize();
    let step = getCurrentStep();
    if (typeof step == "string")
    {
        // Convert the string into number
        step = Number(step)
    }

    const newFontSize = currentFontSize - step
    return (newFontSize < MINIMUM_FONT_SIZE) ? MINIMUM_FONT_SIZE : newFontSize;
}

/**
 * Update terminal font size in pixels
 * 
 * @param {number|undefined} fontSize terminal font size in pixels, between 1-100. Set {@linkcode undefined} to reset as default.
 * 
 * @returns {Thenable<void>}
 */
const setTerminalFontSize = (fontSize) => {
    return vscode.workspace.getConfiguration("terminal.integrated").update("fontSize", fontSize, IS_GLOBAL_CONFIG)
}



const activate = (context) => {
    // Extension commands to trigger certain actions
    const zoomInCommand = 'easyTerminalZoom.zoomIn';
    const zoomOutCommand = 'easyTerminalZoom.zoomOut';
    const zoomResetCommand = 'easyTerminalZoom.zoomReset';

    const zoomResetCommandHandler = () => {
        setTerminalFontSize(undefined)
    }
    const zoomInCommandHandler = () => {
        const incrementedFontSize = increment()
        setTerminalFontSize(incrementedFontSize)
    }
    const zoomOutCommandHandler = () => {
        const decrementedFontSize = decrement()
        setTerminalFontSize(decrementedFontSize)
    }
    
    // Bind the commands and their actions
    context.subscriptions.push(
        registerCommand(zoomResetCommand, zoomResetCommandHandler),
        registerCommand(zoomInCommand, zoomInCommandHandler),
        registerCommand(zoomOutCommand, zoomOutCommandHandler)
    );
}

module.exports = { activate };