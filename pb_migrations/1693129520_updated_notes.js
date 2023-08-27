/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("03m2lc5ciwkruxz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wyxrlo0n",
    "name": "lastOpened",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("03m2lc5ciwkruxz")

  // remove
  collection.schema.removeField("wyxrlo0n")

  return dao.saveCollection(collection)
})
