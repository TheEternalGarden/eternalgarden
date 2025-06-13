# Oracle Backend

This is the backend for the Oracle ChatGPT integration.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your OpenAI API key:**
   - Create a file called `.env` in this directory.
   - Add this line (replace with your actual key):
     ```
     OPENAI_API_KEY=sk-...
     ```

3. **Start the server:**
   ```bash
   npm start
   ```
   The server will run on http://localhost:3001 by default.

## Usage
- The frontend (oracle.html) will POST to `/api/oracle` with a conversation array.
- The backend will return the assistant's reply. 