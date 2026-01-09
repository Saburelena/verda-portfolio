# COMPONENTS MAP

Карта компонентов проекта. Отражает структуру, зависимости и статус реализации.

---

## Глобальные блоки

| Компонент        | Путь                                 | Использует                                                                 |
|------------------|--------------------------------------|----------------------------------------------------------------------------|
| **App Layout**   | `src/styles/layout/_app.scss`        | `flex`, `min-height: 100vh` (с fallback), `@supports (min-height: 100dvh)` |
| **Container**    | `src/styles/layout/_container.scss`  | `max-width`, `margin-inline: auto`, `padding-inline`                       |

---

## Секции

| Компонент  | Путь                   | Использует                                                                                                         |
|------------|------------------------|--------------------------------------------------------------------------------------------------------------------|
| **Header** | `src/sections/header/` | `_header-nav-item`, `_header-signin-shared`, `layout-header`, `press-down`, `focus-outline-rounded`, медиа-миксины |

---

## UI-компоненты

| Компонент      | Путь                                      | Использует                                        |
|----------------|-------------------------------------------|---------------------------------------------------|
| **Cart Button**| `src/ui/buttons/cart-button/`             | `button-base`, `press-down`                       |
| **Logo**       | `src/ui/logo/`                            | `inline-block`, `max-width: none`                 |

---

## Базовые стили

| Блок                | Путь                        | Назначение                                                      |
|---------------------|-----------------------------|-----------------------------------------------------------------|
| **Сброс**           | `src/styles/reset.scss`     | Нейтрализация браузерных стилей                                 |
| **Базовые стили**   | `src/styles/base.scss`      | Семантические элементы (`p`, `img`, `a`, `table`)               |
| **Глобальные стили**| `src/styles/globals.scss`   | Типографика, цвета, отступы, `transition`                       |
| **Современные фичи**| `src/styles/modern.scss`    | `scrollbar-gutter`, `scroll-behavior`, `prefers-reduced-motion` |

---

> Все компоненты используют **логические свойства** (`margin-inline`, `padding-inline`, `margin-block-end`) для поддержки RTL.  
> Все интерактивные элементы — **доступны с клавиатуры** (`:focus-visible`).
