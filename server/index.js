require('dotenv').config();
const path = require('path');
const { Configuration, OpenAIApi } = require("openai");


const express = require('express');
const morgan = require('morgan');


const app = express();
app.use(morgan('dev'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static(path.join(__dirname, '../client/dist')));

const configuration = new Configuration({
  apiKey: "ChatGPT-Hackers", // You should store API keys in environment variables, not in code.
});
const openai = new OpenAIApi(configuration, "https://free.churchless.tech/v1");

app.post('/message', async (req, res) => {
  const userMessage = req.body.text;
  console.log('message', userMessage)

  try {
    const chatCompletion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are an AI mental health chatbot." },
        { role: "user", content: userMessage },
      ],
    });

    // Send the AI's response back to the client
    res.json(chatCompletion.data.choices[0].message);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while communicating with the AI.' });
  }
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server available at http://localhost:${PORT}`);
});
