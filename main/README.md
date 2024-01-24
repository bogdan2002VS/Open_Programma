# Tex optimizator

## Introduction

This app is designed to improve your written communication. By automatically correcting grammar and stylistic errors, adjusting the tone, and providing various formatting options (e.g., markdown or bullet point conversion), it ensures your messages are clear and accurate. This tool is particularly valuable for remote working professionals aiming to enhance their written communication in every environment and for non-native speakers. This tool is meant to be automated in the future.

**Link with demo in case there 2 many things to download** : https://youtu.be/fR31vXkHb-w

## Features

1. **Grammar and Style Refinement**: Corrects grammatical and stylistic errors.
2. **Tone Adjustment**: Adjusts the tone of the text as needed.
3. **Text Formatting**: Includes markdown formatting and bullet point conversion.

## Whats going on?

Well, when the user selects its desired setting, the app sends the predefined prompts to the openAI API, and then the result is generated and displayed.

## Requirements

1. Node.js v13.0.0 or above (https://nodejs.org/en/download)
2. Next.js latest (npm below)
2. An account at OpenAI(for this demo we will use my account)


## Installation

Clone the repository:

```bash
git clone https://git.fhict.nl/I489732/open_pograma.git
cd main
```

Install the required packages:

```bash
npm i
```

```bash
npm install next@latest react@latest react-dom@latest
```

## Usage

Start the server:

```bash
npm run dev
```

Navigate to `localhost:3000` in your browser.

Enter the text you want to refine into the provided field, select your desired settings, and then click 'Refine'. The service will do the rest.
