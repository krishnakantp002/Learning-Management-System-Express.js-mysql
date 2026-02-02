const pool = require('../config/db.js')

const queryText = `
create table if not exists courses (
    course_id int primary key auto_increment,
    title varchar(50) not null ,
    description TEXT,
    instructor_id int not null ,
    is_published boolean default false,
    created_at TIMESTAMP DEFAULT current_timestamp,
    updated_at TIMESTAMP DEFAULT current_timestamp 
    on update current_timestamp,

    foreign key (instructor_id) references users(id)
    on delete cascade
)Engine=InnoDB;
`
const createUserTable = async () => {
    try {
        await pool.query(queryText);
        console.log('couses table created')        
    } catch (error) {
        console.log('error on creating course table',error)
    }

}

module.exports = createUserTable;