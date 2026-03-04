const conversations = [
  {
    id: 1,
    userId: 1,
    messages: [
      { id: 1, text: "Привет! Как твои дела?", fromMe: false, time: "16:55" },
      { id: 2, text: "Привет! Всё отлично, а у тебя?", fromMe: true, time: "16:56" },
      { id: 3, text: "Тоже хорошо! Чем занимаешься?", fromMe: false, time: "16:58" },
      { id: 4, text: "Смотрю сериал. А ты?", fromMe: true, time: "17:00" },
      { id: 5, text: "Гуляю в парке, погода чудесная!", fromMe: false, time: "17:02" },
    ],
  },
  {
    id: 2,
    userId: 2,
    messages: [
      { id: 1, text: "Привет, красивые фотографии у тебя!", fromMe: false, time: "10:30" },
      { id: 2, text: "Спасибо! Ты тоже отлично выглядишь 😊", fromMe: true, time: "10:45" },
    ],
  },
  {
    id: 3,
    userId: 4,
    messages: [
      { id: 1, text: "Привет! Тоже любишь танцевать?", fromMe: false, time: "10:30" },
      { id: 2, text: "Да, обожаю! Какой стиль предпочитаешь?", fromMe: true, time: "10:35" },
      { id: 3, text: "Сальсу и бачату в основном", fromMe: false, time: "10:38" },
    ],
  },
  {
    id: 4,
    userId: 5,
    messages: [
      { id: 1, text: "Привет! Увидела, что ты тоже дизайнер", fromMe: false, time: "14:20" },
      { id: 2, text: "О, круто! Какое направление?", fromMe: true, time: "14:25" },
    ],
  },
]

export default conversations
