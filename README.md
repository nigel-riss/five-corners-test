[RU]
# Пояснительная записка
Тестовое задание на вакансию React-разработчик для компании «5 углов»

[Техническое задание](technical-task-ru.md)

[Посмотреть](https://yuriy.work/test-5-corners) работающий проект

Основные моменты, которые возможно нуждаются в объяснении:
- **для ускорения разработки использовался create-react-app.** На боевом проекте, возможно на каком-то этапе, я бы сделал "eject" или написал сборку с нуля.
- **минимум зависимостей.** Помимо тех зависимостей, которые поставил create-react-app добавлены только зависимости для полученния данных для адреса и отрисовки карты.
- **минимум «автопилота».** Большинство решений принято осознано, кроме тех, которые нет 🙂. Готов обсуждать.
- **немного экспериментов с хуками.** На чисто функциональные компоненты я перешел относительно недавно, поэтому было желание лишний раз поэксперементировать с хуками. Возможно где-то они использованы избыточно.


Что бы я доделал на реальном проекте:
- Возможно добавил какой-нибудь storage (Redux).
- Поговорил с дизайнером о доступности. Возможно следует немного доработать компоненты.
- Добавил бы в валидацию пояснительные тексты, а не только выделение цветом.
- Автодополнение с выбором возможных адресов. Используемый пакет позволяет легко имплементировать этот функционал.
- Потестировал не других браузерах (тестировалось только под "зелёный" Google Chrome)



[EN]
# Explanatory Note (memorandum)[WIP]
Technical task (specification) link here
[Check out](https://yuriy.work/test-5-corners) working project

Things i'd do if it was for business purposes:
- Add storage (like Redux)
- Discuss form input components design with a designer
- Add validation texts
- Address autocomplete
