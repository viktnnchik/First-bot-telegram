const TelegramApi = require('node-telegram-bot-api')

const token = '5507191582:AAEEBmroNzxTyB51lP-STLev79aKoNlC4Dw'

const bot = new TelegramApi(token, { polling: true })


const starting = () => {
  bot.setMyCommands([
  { command: '/start', description: 'Приветствие' },
  {command: '/comands',description: 'Посмотреть все доступные команды бота'},
  { command: '/info', description: 'Информация о разработчике' },
  {command: '/contact',description: 'Контакты разработчика'},
 ])
bot.on('message', async msg => {
  const text = msg.text;
  const chatId = msg.chat.id;
  if (text === '/start') {
    await bot.sendSticker(chatId,`https://tlgrm.ru/_/stickers/b0d/85f/b0d85fbf-de1b-4aaf-836c-1cddaa16e002/1.webp`)
    return bot.sendMessage(chatId, `Дорогой ${msg.from.first_name} добро пожаловать к моему первому боту на node.js ! 
Напиши /comands что бы увидеть все доступные функции!`)
  }
   if (text === '/comands') {
     return bot.sendMessage(chatId, `Доступные функции:
    /info - информация о владельце бота
    /contact - способы связи с разработчиком`)
  }
  if (text === '/info') {
    return bot.sendMessage(chatId, `Обо мне:
Привет меня зовут Виктор я Web-developer'a тестирую тут первого бота`)
  }
    if (text === '/contact') {
      return bot.sendMessage(chatId, `Контакты для связи со мной:
   e-mail : viktnnchik@mail.ru
   Github : viktnnchik`)
  }
  return bot.sendMessage(chatId, 'Меня пока не научили такой команде!')
})
   
}
starting()