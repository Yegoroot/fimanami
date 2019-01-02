https://coursehunters.net/course/prodvinutyy-kurs-po-react-js  // первый урок установки от сюда

## Различные компоненты
Обычно в разных файлах redux всего приложения: __action__ отдельно, __reducer__   в сторонке отдельно
__action creators__ отдельно. И чтоб не дробить так на части используем [Ducks: Redux Reducer Bundles](https://github.com/erikras/ducks-modular-redux)
Ducks позволяет нам:
- Константы, sagas и reducerы храним в одном месте - и получаеться полноценный виджет, который содержит все необходимое
- И появляется возможность поместить такой виджет в отдельную библиотеку и использовать в различных проектах 


## Так же подключены плагин
- router 
- redux 
- saga 
- redux 
- loader
- redux-thunk
- redux-form  https://redux-form.com/8.0.4/docs/gettingstarted.md/
- immutable
- connected-react-router - для хранения роутов в redux

## Затем 
подключена тема триал [material-UI](#https://demos.creative-tim.com/material-kit-react/#/)

интегрированно с имеющимся проектом, убраны лишние файлы, 
в основе лежит основной проект, а тема лишь дополнет *(натягиваеться, подстраивается)

- подключил redux tools


## Установка

> npm ci


## BUILD (в подкаталог домена)
Что касаеться роутов то я выложил у себя на сайте в директорию domen.com/ar 
и соответсвенно добавил __<BrowserRouter basename={'/ar'}>__ в index.jsx и __<Redirect to='/'/>__ в switcher in App.js
a так же в __package.json__  "homepage": "https://domen.com/ar",