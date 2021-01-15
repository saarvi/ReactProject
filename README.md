# Тестовое задание
## Установка
Скачиваем репозиторию используя консольную команду **Git**:
```
git clone https://github.com/saarvi/reactproject
```
Переходим в созданную директорию приложения:
```
cd reactproject
```
Запускаем установку необходимых компонентов **Symfony** и **Yarn** из директории приложения:
```
composer install
```
```
yarn install
```

## Конфигурация
Создаем базу данных удобным способом и изменяем данные для подключения к базе данных на Ваши в файле: ***.env***

Запускаем создание и выполнений миграций **Doctrine** следующими командами:
```
php bin/console make:migration
```
```
php bin/console doctrine:migrations:migrate
```
Заполняем созданные таблицы тестовыми данными:
```
php bin/console doctrine:fixtures:load
```

## Запуск
Приложение разрабатывалось на личном VDS с набором тех пакетов, которые необходимы для работы личных проектов, на отдельных доменных именах, поэтому следующая команда из документации неактуальна для запуска приложения в моем случае.
```
php bin/console server:run
```
Запускаем компиляцию приложения **React**:
```
yarn encore dev --watch
```

## Комментарий к приложению
> Из тестового задания невыполнено: функция поиска по заголовку и/или контенту, удаление/скрытие отдельных комментариев.

> Дизайн выполнен скромно, так как не был задачей.
