## Schema Information

## users
column name     | data type | details
----------------|-----------|----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## recordings
column name     | data type | details
----------------|-----------|----------------------
id              | integer   | not null, primary key
title           | string    | not null
recording_url   | string    | not null
image_url       | string    |
description     | text      |
uploader_id     | integer   | not null, foreign key (references users), indexed
plays           | integer   | not null, default = 0
publicity       | string    | not null, "public" or "private"
category_id     | integer   | not null, foreign key (references categories), indexed

## categories
column name     | data type | details
----------------|-----------|----------------------
id              | integer   | not null, primary key
name            | integer   | not null

## favorites
column name     | data type | details
----------------|-----------|----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed
recording_id    | integer   | not null, foreign key (references recordings)

## comments
column name     | data type | details
----------------|-----------|----------------------
id              | integer   | not null, primary key
content         | text      | not null
recording_id    | integer   | not null, foreign key (references recordings), indexed
author_id       | integer   | not null, foreign key (references users), indexed
