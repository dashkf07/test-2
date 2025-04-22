const TelegramBot = require('node-telegram-bot-api');

const token = 'YOUR_TELEGRAM_BOT_TOKEN';
const bot = new TelegramBot(token, { polling: true });

const courses = [
  { id: 1, name: 'Название курса 1', status: 'not started' },
  { id: 2, name: 'Название курса 2', status: 'in progress', progress: '57%' },
  { id: 3, name: 'Название курса 3', status: 'done' },
];

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'AYA Leader – Курсы\nВыберите курс:', {
    reply_markup: {
      inline_keyboard: courses.map((course) => [
        {
          text: course.name,
          callback_data: `course_${course.id}`,
        },
      ]),
    },
  });
});

bot.on('callback_query', (query) => {
  const chatId = query.message.chat.id;
  const courseId = parseInt(query.data.replace('course_', ''));
  const course = courses.find((c) => c.id === courseId);

  let statusMsg = '';

  switch (course.status) {
    case 'not started':
      statusMsg = 'Курс ещё не начат.';
      break;
    case 'in progress':
      statusMsg = `Курс в процессе. Прогресс: ${course.progress}`;
      break;
    case 'done':
      statusMsg = 'Курс завершён!';
      break;
  }

  bot.sendMessage(chatId, `📝 ${course.name}\nСтатус: ${statusMsg}`);
});
