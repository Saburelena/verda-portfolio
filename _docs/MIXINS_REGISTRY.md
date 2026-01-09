# MIXINS REGISTRY
Справочник по всем **миксинам**.

## Глобальные миксины (`src/styles/mixins.scss`)

| Миксин                  | Назначение                                     | Поведение / Что делает                                                                             | Пример                                  |
|-------------------------|------------------------------------------------|----------------------------------------------------------------------------------------------------|-----------------------------------------|
| `fluid`                 | Адаптивное свойство через `clamp()`            | Генерирует `property: clamp(min, calc(...), max)` для плавной адаптации под viewport               | `@include fluid(font-size, 16px, 24px)` |
| `fluid-text`            | Адаптивный `font-size`                         | Обёртка над `fluid` для `font-size`; создаёт отзывчивый текст                                      | `@include fluid-text(20px, 36px)`       |
| `reset-link`            | Сброс стилей ссылки                            | `color: inherit; text-decoration: none`; убирает подчёркивание при наведении                       | `@include reset-link`                   |
| `reset-button`          | Полный сброс стилей кнопки                     | Обнуляет padding, фон, border, наследует шрифт и цвет                                              | `@include reset-button`                 |
| `flex-center`           | Центрирование через Flexbox                    | `display: flex` (или `inline-flex`); `justify-content` и `align-items: center`                     | `@include flex-center(true)`            |
| `abs-center`            | Абсолютное центрирование                       | `position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)`                        | `@include abs-center`                   |
| `square`                | Квадратный элемент                             | `width: $size; aspect-ratio: 1`                                                                    | `@include square(40px)`                 |
| `hover`                 | Универсальный hover/active для десктопа и тача | Оборачивает `@content` в `@media (hover: hover) { &:hover }` и `@media (hover: none) { &:active }` | `@include hover { color: red; }`        |
| `layout-header`         | Шапка с `space-between` и gap                  | `display: flex; justify-content: space-between; align-items: center; gap: $gap`                    | `@include layout-header(24px)`          |
| `focus-outline-rounded` | Единый стиль фокуса с закруглением             | При `:focus-visible`: убирает outline, добавляет `box-shadow` и `border-radius`                    | `@include focus-outline-rounded`        |
| `button-base`           | Базовые стили CTA-кнопок                       | Сбрасывает кнопку, добавляет фокус, задаёт высоту 46px, padding, border-radius, шрифт              | `@include button-base`                  |
| `press-down`            | Эффект «нажатия» (hover + active)              | `transform: translateY($offset)` при `:hover` (десктоп) и `:active` (мобильные)                    | `@include press-down(2px)`              |

## Контекст использования

### Типографика и базовые стили (`src/styles/globals.scss`)

| Где используется | Миксин       | Зачем                          | Состав / Поведение                                                                       |
|------------------|--------------|--------------------------------|------------------------------------------------------------------------------------------|
| `html`           | `fluid-text` | Адаптивный базовый `font-size` | Генерирует `font-size: clamp(20px, ..., 22px)`, плавно масштабируется от 360px до 1920px |
| `h1, .h1`        | `fluid-text` | Адаптивный заголовок H1        | `font-size: clamp(48px, ..., 70px)` — от 360px до 1920px                                 |
| `h2, .h2`        | `fluid-text` | Адаптивный заголовок H2        | `font-size: clamp(36px, ..., 50px)` — от 360px до 1920px                                 |
| `h3, .h3`        | `fluid-text` | Адаптивный заголовок H3        | `font-size: clamp(28px, ..., 32px)` — от 360px до 1920px                                 |
| `h4, .h4`        | `fluid-text` | Адаптивный заголовок H4        | `font-size: clamp(24px, ..., 28px)` — от 360px до 1920px                                 |
| `.small-text`    | `fluid-text` | Адаптивный мелкий текст        | `font-size: clamp(14px, ..., 16px)` — от 360px до 1920px                                 |

> Все заголовки также наследуют `font-weight: $font-weight-medium`.  
> Параграфы используют `margin-block-end: 1rem` (логическое свойство для поддержки RTL).

### Шапка (`src/sections/header/header.scss`)

| Где используется                                         | Миксин                                  | Зачем                                | Состав / Поведение                                                                                                                                                                            |
|----------------------------------------------------------|-----------------------------------------|--------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `.header__inner`                                         | `layout-header`                         | Выравнивание логотипа, меню и кнопок | `display: flex; justify-content: space-between; align-items: center; gap: 24px`                                                                                                               |
| `.header__menu-link`, `.header__logo`                    | `_header-nav-item` (локальный)          | Стили навигационных ссылок           | Сбрасывает ссылку, применяет фокус, задаёт высоту 46px, padding 12px, типографику, white-space, hover-цвет (зелёный), эффект press-down                                                       |
| `.header__signin-button`, `.header__mobile-signin`       | `button-base` + `_header-signin-shared` | Базовые стили кнопок входа           | `button-base`: сброс кнопки, фокус, высота 46px, padding 12px 24px, border-radius; `_header-signin-shared`: ширина 122px, прозрачный фон, flex с gap 4px, иконка 16×16, hover-фон, press-down |
| `.header__burger`, `.header__mobile-nav-link`            | `focus-outline-rounded`                 | Единый стиль фокуса                  | `outline: none; box-shadow: 0 0 0 2px $focus-outline-color-secondary; border-radius: 8px` (только при `:focus-visible`)                                                                       |
| `.header__menu-link`, `.header__mobile-nav-link`, кнопки | `press-down`                            | Эффект «нажатия»                     | `transform: translateY(1px)` при `:hover` (десктоп) и `:active` (мобильные)                                                                                                                   |
| `.header__mobile-nav-link`                               | `reset-link`                            | Сброс стилей ссылки                  | `color: inherit; text-decoration: none; &:hover { text-decoration: none }`                                                                                                                    | 


### Кнопка корзины (`src/ui/buttons/cart-button/cart-button.scss`)

| Где используется | Миксин        | Состав / Поведение                                                                                                           |
|------------------|---------------|------------------------------------------------------------------------------------------------------------------------------|
| `.cart-button`   | `button-base` | Сбрасывает кнопку, применяет фокус с закруглением, задаёт высоту 46px, padding 12px 24px, border-radius, шрифт и white-space |
| `.cart-button`   | `press-down`  | Добавляет `transform: translateY(1px)` при `:hover` (десктоп) и `:active` (мобильные)                                        |


## Медиа-миксины (`src/styles/media.scss`)

Используются везде для адаптивности. Примеры:
- `@include mobile-only { ... }` — только на мобильных
- `@include tablet-up { ... }` — от планшетов и выше

Все медиа-миксины построены на переменных из `variables/_breakpoints.scss`.


## Локальные миксины

---

## Локальные миксины

### `_header-nav-item` (`src/sections/header/header.scss`)

Универсальный миксин для навигационных элементов в хедере: логотип и пункты меню.

| Свойство           | Значение / Поведение                                                                                                 |
|--------------------|----------------------------------------------------------------------------------------------------------------------|
| **Сброс ссылки**   | `@include reset-link`                                                                                                |
| **Фокус**          | `@include focus-outline-rounded`                                                                                     |
| **Размеры**        | `height: 46px; padding: 12px`                                                                                        |
| **Типографика**    | `font-weight: $font-weight-medium; font-size: $nav-font-size-default; line-height: $nav-line-height-desktop-default` |
| **Поведение**      | `white-space: nowrap; display: inline-flex`                                                                          |
| **Hover**          | `color: $color-green`                                                                                                |
| **Интерактив**     | `@include press-down`                                                                                                |
| **Используется в** | `.header__logo`, `.header__menu-link`                                                                                |


### `_header-signin-shared` (`src/sections/header/header.scss`)

Общий миксин для кнопок входа/регистрации в десктопной и мобильной версиях хедера.

| Свойство           | Значение / Поведение                                                                               |
|--------------------|----------------------------------------------------------------------------------------------------|
| **Ширина**         | `width: 122px`                                                                                     |
| **Фон и цвет**     | `background: transparent; color: $color-dark-gray`                                                 |
| **Типографика**    | `font-weight: $font-weight-medium; font-size: 16px; line-height: $nav-line-height-desktop-default` |
| **Поведение**      | `white-space: nowrap; display: inline-flex; gap: 4px`                                              |
| **Иконка**         | `width: 16px; height: 16px; flex-shrink: 0`                                                        |
| **Hover**          | `background-color: $color-white-alpha-60`                                                          |
| **Интерактив**     | `@include press-down`                                                                              |
| **Используется в** | `.header__signin-button`, `.header__mobile-signin`                                                 |

> Оба миксина **приватные** (имя начинается с `_`) и используются **только внутри `header.scss`**.




