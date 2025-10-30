# Verda (Frontend Alliance)

Данный репозиторий является вашим проектом на момент всего обучения, Вы будете работать с ним на любом этапе — начиная от HTML & CSS 
и заканчивая тестированием (Jest / Vue Test Utils / React Testing Library)

## Оглавление
- [Как работать с проектом](#как-работать-с-проектом-project)
- [Структура проекта](#структура-проекта-structure)
- [Правила написания кода](#правила-написания-кода-code-style)
  - [БЭМ (Блок-Элемент-Модификатор)](#бэм-блок-элемент-модификатор-bem)
  - [SCSS](#scss-scss)
- [Общие рекомендации](#общие-рекомендации-recommendations)

## Как работать с проектом? {#project}
Для ознакомления с тем, как начинать работу с практикой - **посмотрите [это видео](https://t.me/c/2343060361/1/22424)**

## Структура проекта {#structure}
При разработке **мы рекомендуем** придерживаться подобной структуры проекта, чтобы код был организованным, масштабируемым и удобным для чтения. 
```text
project/
├── styles/
│ ├── variables.scss # Переиспользуемые токены (цвета, размеры, шрифты)
│ ├── mixins.scss # Миксины для повторяющихся стилей
│ ├── main.scss # Главный файл стилей (импортирует все остальные)
│ └── components/ # Стили компонентов (один блок = один файл)
│ ├── _button.scss
│ ├── _card.scss
│ ├── _header.scss
│ └── ...
├── scripts/
│ ├── main.js # Основной файл скриптов
│ ├── swiper.js # Пример дополнительной библиотеки
│ ├── utils/ # Вспомогательные функции
│ │ └── helpers.js
│ └── ...
├── assets/
│ ├── images/ # Изображения
│ │ ├── hero-bg.jpg
│ │ ├── product-1.png
│ │ └── ...
│ └── icons/ # Иконки и SVG
│ ├── arrow.svg
│ ├── logo.svg
│ └── ...
└── index.html
```

## Правила написания кода #{code-style}
Здесь мы описали наши строгие рекомендации по оформлению и написанию кода.

Документ, предоставляющий более подробные правила написания кода на HTML & CSS, JavaScript, TypeScript, а также Vue и Nuxt: [**Ссылка**](https://buildin.ai/share/16d7d8fa-4d1b-446e-a451-eb4e19f60446?code=0LGY6Q)
### БЭМ (Блок-Элемент-Модификатор) #{BEM}
При написании классов - придерживайтесь BEM методологии.

```html
<!-- ✅ Правильно -->
<div class="card">
   <h2 class="card__title">Заголовок</h2>
   <p class="card__text">Текст карточки</p>
   <button class="card__button card__button--primary">Кнопка</button> 
</div>

<!-- ❌ Неправильно -->
<div class="card">
   <h2 class="title">Заголовок</h2>
   <p class="text">Текст карточки</p>
   <button class="button primary">Кнопка</button> 
</div>
```

### SCSS #{SCSS}
- **Используйте токены (_переменные_) для значений**, даже если они используются один раз, которые могут переиспользоваться или измениться в проекте (**_background-color, color, border, border-radius, transition, при желании - padding и margin_**)
```scss
/* ✅ Правильно (CSS-переменные) */ 
:root {
--primary-color: #3498db;
--spacing-base: 16px;
}

.button {
background-color: var(--primary-color);
padding: var(--spacing-base);
}

/* ✅ Правильно (SCSS-переменные)*/ 
$primary-color: #3498db;
$spacing-base: 16px;

.button {
background-color: $primary-color;
padding: $spacing-base;
}

/* ❌ Неправильно */
.button {
background-color: #3498db;
padding: 16px;
}
```
- Используйте родительский селектор (&) для вложенности
```scss
/* ✅ Правильно */
.main {
  &__container {
    border: 1px solid var(--main-border-color);
  }

  &__inner {
    text-align: center;
  }
}

/* ❌ Неправильно */
.main__container {
  border: 1px solid #ffffff;
}

.main__inner {
  text-align: center;
}
```

### Общие рекомендации #{recommendations}
- Выносите повторяющиеся значения в переменные
-Используйте миксины для повторяющихся стилей 
- Придерживайтесь единой структуры файлов 
- Пишите осмысленные названия классов 
- Избегайте глубокой вложенности селекторов (максимум 3 уровня)