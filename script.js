


//----------------------------------------

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyBXUI1wqPf9jC08'}).base('app21ZWp3xLPn6TG4');

const table = base('People');

const getRecords = async () => {
    const records = await table
    .select()
    .firstPage();
    console.log(records)
}


const getRecordById = async (id) => {
    const record = await table.find(id);
    console.log(record)
}

// getRecordById('rec7nKXFDGJ3E97Ns')

const createRecord = async (fields) => {
    const createdRecord = await table.create(fields);
    console.log(createdRecord);
}

const updatedRecord = async (id, fields) => {
    const updatedRecord = await table.update(id, fields);
    console.log(minifyRecord(updatedRecord))
}

const minifyRecord = (record) => {
    return {
        id: record.id,
        fields: record.fields
    }   
}

// updatedRecord("recp3MbYnvXwkwuHi" , {
//     Name: "Updated"
// })

createRecord({
    Name: "hobbit",
    About: "burger",
})

// getRecords();








