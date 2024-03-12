
# Профильное задание

## Сообщества - социальная сеть для тех, кто любит объединяться по интересам.

**Stack:** HTML, JS, TS, React, Zustand, React Query, Axios, SCSS modules, Husky, eslint, Lint Staged, Query String  
Ссылка на проект: https://alekseyvakht.github.io/test-task/  
Для запуска приложения:
1. Склонировать репозиторий `git clone git@github.com:AlekseyVakht/test-task.git`
2. В папке со склонированным репозиторием `npm install`
3. Для запуска приложения `npm run dev`
   
Проделанная работа:

1. Реализация запросов осуществляется через axios путем мока данных из groups.json. Для реализации задержки в 1 секунду в соответствии с таском, создан Promise с методом setTimeout, resolve наступает через 1 секунду. Таким образом обеспечивается задержка между каждым обращением к backend.
   Так же для реализации задержки и её визуального отслеживания, было отключено кеширование данных через React Query. Таким образом при каждом изменении фильтров и их применении, мыбудем получать новый запрос с выбранными фильтрами.
2. Для реализации фейковых запросов URL query string была использована библиотека QueryString, таким образом выбранные фильтры преобразовываются в строку, при изменении которой, осщуествляется запрос к backend. В Network мы имеем картину схожую с реальной фильтрацией данных на backend через query string запросы.
3. Для организации state management был выбран Zustand.
4. Фильтрация данных производится во время запроса на backend. Полученные фильтры в виде строки парсятся в исходный объект, и далее фильтрация осуществляется через функцию, которая в свою очередь возвращает результат фильтрации по всем нужным параметрам с учетом их отсутсвия при выборе фильтров.
5. Осуществлена обработка ошибок при указанных в таске случаях (для result !== 1, при отсутствии data или если data = []). Все ошибки обрабатываются, для пользователя выводится информационное сообщение о наличии ошибки при обработке данных.
6. Для линтинга и отслеживания ошибок при написании кода применен стек ESLint-Prettier-Husky-LintStaged.
7. CSS составляющая приложения реализована через SCSS modules.
