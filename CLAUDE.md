# Booking — Hotel Search App

## Stack
- **React 18** + Vite
- **Redux Toolkit** + Redux Saga (async data fetching)
- **MUI v6** (Material UI, orange theme: `orange[500]`)
- **react-final-form** (form + validation)
- **react-router-dom v6** + redux-first-history
- **json-server** (mock API, db.json)
- **axios** для запросов

## Dev servers
- Vite: `npm run dev` → http://localhost:5173
- json-server: `npm run server` → http://localhost:3000
- API URL: `src/constants/api.js` → `http://localhost:3000/`

## Структура
```
src/
  components/
    Button/       — MUI Button обёртка + LoadingButton
    Datepicker/   — MUI DatePicker через react-final-form Field
    Form/         — форма поиска (BookingForm), hooks/useDestination.js
    Header/       — хедер с Container внутри (ограничен по ширине)
    HotelItem/    — карточка отеля (фото Unsplash, Rating, Chip)
    Input/        — MUI TextField обёртка
    Layout/       — Provider + ThemeProvider + Header + Footer
    Logo/         — логотип (оранжевый круг с "B" + текст)
    Select/       — MUI Select обёртка
  pages/
    Main/         — hero с фото + форма + stats + "How It Works"
    About/        — hero + "Our Story" + 6 feature-карточек + CTA
    Hotels/       — грид карточек отелей, hooks/useHotels.js
  redux/
    destination/  — slice + saga (загрузка списка городов)
    hotels/       — slice + saga (загрузка отелей по параметрам)
    rootSaga.js
    store.js
  constants/
    api.js        — API_URL
    routes.jsx    — { main, about, hotels }
  validators/
    bookingForm.js — validate.required
  utils/
    api.js        — axios instance, getDestination(), getHotels(params)
```

## Что уже сделано
- Hero-секция на Main с фото отеля (Unsplash) и формой поверх
- Stats блок (10K+ hotels, 150+ destinations, 2M+ travelers, 4.8★)
- "How It Works" секция на Main
- About страница: hero + "Our Story" + 6 feature-карточек + оранжевый CTA
- HotelItem: реальные фото отелей (Unsplash по массиву ID), Rating звёзды, Chip страны, hover-эффект
- Hotels страница: "Available Hotels" + счётчик найденных, loading state (CircularProgress)
- Footer во всех страницах (через Layout)
- Favicon: оранжевый круг с "B" (public/favicon.svg)
- Header: ограничен Container (совпадает с шириной контента), мобильный spacing фикс
- Логотип: оранжевый круг с буквой "B" внутри

## Что нужно сделать (приоритет)
1. Фильтр + сортировка на Hotels странице (по рейтингу, по названию)
2. Валидация дат — check-out не раньше check-in
3. Скелетон-лоадер вместо спиннера на Hotels
4. Кнопка "Back to search" на Hotels
5. Пустое состояние (empty state) если нет отелей
6. Деплой на GitHub Pages (json-server заменить на статические данные из db.json)

## Деплой (не сделан)
Для GitHub Pages нужно:
- Встроить db.json статически (убрать зависимость от json-server)
- Добавить `base` в vite.config.js с именем репозитория
- Настроить gh-pages

## Правила
- Код должен выглядеть как написанный разработчиком, без AI-следов
- Никогда не коммитить/пушить без явного "ок" от пользователя
- Всегда делать скриншоты через playwright после изменений
- Playwright path: `/Users/neklz1icloud.com/.npm/_npx/705bc6b22212b352/node_modules/playwright/index.mjs`
- Общаться на русском
