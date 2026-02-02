create table if not exists courses (
    course_id int primary key auto_increment,
    title varchar(50) not null ,
    description TEXT,
    instructor_id int not null REFERENCES users(id),
    is_published boolean false,
    created_at TIMESTAMP DEFAULT current_timestamp,
    updated_at TIMESTAMP DEFAULT current_timestamp 
    on update current_timestamp
)