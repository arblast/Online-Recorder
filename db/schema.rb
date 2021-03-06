# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20181012023455) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "comments", force: :cascade do |t|
    t.string   "content",      null: false
    t.integer  "author_id",    null: false
    t.integer  "recording_id", null: false
    t.integer  "parent_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "comments", ["recording_id"], name: "index_comments_on_recording_id", using: :btree

  create_table "favorites", force: :cascade do |t|
    t.integer  "user_id",      null: false
    t.integer  "recording_id", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "favorites", ["recording_id"], name: "index_favorites_on_recording_id", using: :btree
  add_index "favorites", ["user_id", "recording_id"], name: "index_favorites_on_user_id_and_recording_id", unique: true, using: :btree
  add_index "favorites", ["user_id"], name: "index_favorites_on_user_id", using: :btree

  create_table "recordings", force: :cascade do |t|
    t.string   "title",                      null: false
    t.string   "recording_url",              null: false
    t.string   "image_url"
    t.text     "description",   default: ""
    t.integer  "uploader_id",                null: false
    t.integer  "plays",         default: 0,  null: false
    t.string   "publicity",                  null: false
    t.integer  "category_id",                null: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
  end

  add_index "recordings", ["category_id"], name: "index_recordings_on_category_id", using: :btree
  add_index "recordings", ["publicity"], name: "index_recordings_on_publicity", using: :btree
  add_index "recordings", ["uploader_id"], name: "index_recordings_on_uploader_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",                                                                                                 null: false
    t.string   "email",                                                                                                    null: false
    t.string   "password_digest",                                                                                          null: false
    t.string   "session_token",                                                                                            null: false
    t.datetime "created_at",                                                                                               null: false
    t.datetime "updated_at",                                                                                               null: false
    t.string   "image_url",       default: "https://res.cloudinary.com/record-cloud/image/upload/v1478421823/profile.svg", null: false
    t.string   "permission",      default: "user",                                                                         null: false
    t.string   "reset_digest"
    t.datetime "reset_sent_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
