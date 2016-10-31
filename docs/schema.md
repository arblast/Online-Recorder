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
description     | text      |
uploader_id     | integer   | not null, foreign key (references users), indexed
plays           | integer   | not null, default = 0
publicity       | string    | not null, "public" or "private"
category        | string    | not null, indexed

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
user_id         | integer   | not null, foreign key (references users), indexed
