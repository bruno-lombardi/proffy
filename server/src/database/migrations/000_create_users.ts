import Knex from 'knex'

export async function up (knex: Knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('name', 100).notNullable()
    table.string('avatar', 255).notNullable()
    table.string('whatsapp', 20).notNullable()
    table.string('bio', 200).notNullable()
  })
}

export async function down (knex: Knex) {
  return knex.schema.dropTableIfExists('users')
}
