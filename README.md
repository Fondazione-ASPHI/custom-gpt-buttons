# Custom GPT Camera Buttons

> **Important Privacy Notice:**
> 
> **ASPHI Onlus, who hosts this HTML page, will never receive any user data on its servers.** All user data (API keys, prompts, button configurations, images, and settings) is managed entirely within your browser and is only sent directly to the selected AI service (OpenAI or Azure) when you make a request. At no point is any user data transmitted to, stored on, or processed by ASPHI Onlus servers.

## Overview

This web page allows users to create custom buttons that send a photo from their camera, along with a user-defined prompt, to either OpenAI's ChatGPT or Azure OpenAI services. The interface is designed for flexibility, letting users define button names and prompts, select the camera, and choose the AI service.

## How the Page Works

- **Camera Access**: The page lists available cameras and allows the user to select one. When a custom button is pressed, the page captures an image from the selected camera.
- **Custom Buttons**: Users can create, edit, and delete custom buttons. Each button has a name and a prompt. When pressed, the button sends the prompt and the captured image to the selected AI service.
- **Service Selection**: Users can choose between ChatGPT and Azure OpenAI. Depending on the choice, the relevant API key and endpoint fields are shown.
- **System Prompt**: A common system prompt can be set and is sent with every request.
- **Export/Import**: Users can export and import their custom button configurations and system prompt as a JSON file.

## User Data Management and Privacy

This page is designed with privacy in mind. Here is how user data is managed:

### Local Data Storage

- **LocalStorage Usage**: All user settings—including API keys, selected camera, custom buttons, and system prompt—are stored only in the browser's localStorage. This means:
  - No user data is sent to any server except when making explicit API requests to OpenAI or Azure.
  - API keys, prompts, and button configurations never leave the user's device unless the user exports them manually.
- **Persistence**: Data in localStorage persists across browser sessions on the same device and browser, but is not shared with other users or devices.

### API Keys and Sensitive Data

- **API Keys**: The OpenAI and Azure API keys are stored only in localStorage and are never transmitted anywhere except directly to the selected AI service when making a request.
- **Endpoint**: The Azure endpoint is also stored only in localStorage.
- **No External Storage**: The page does not use cookies, external databases, or any form of cloud storage for user data.

### Image and Prompt Transmission

- **Captured Images**: When a button is pressed, the captured image is encoded in base64 and sent as part of the request payload to the selected AI service (OpenAI or Azure). The image is not stored or transmitted elsewhere.
- **Prompts**: The user-defined prompt and system prompt are sent together with the image to the AI service.
- **No Third-Party Sharing**: No data is shared with third parties other than the selected AI service.

### Import/Export

- **Export**: When exporting, the system prompt and custom button definitions are saved to a JSON file. API keys are NOT included in the export.
- **Import**: When importing, only the system prompt and button definitions are loaded. API keys must be entered manually.

### Security Considerations

- **User Responsibility**: Users are responsible for keeping their API keys secure. Do not share your device or browser profile with others if you wish to keep your keys private.
- **No Server-Side Code**: All logic runs client-side in the browser. There is no backend or server component.

## Summary

- All user data (API keys, prompts, button configs) is stored locally in the browser.
- No data is sent anywhere except to the selected AI service when a request is made.
- Export/import does not include sensitive API keys.
- The page is designed to maximize user privacy and control.
