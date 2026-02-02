create table if not exists users (
    id int primary key auto_increment,
    username VARCHAR(50) not null,
    email varchar(100) UNIQUE not null,
    password varchar(20) not null,
    role enum(admin,instructor,student) not null,
    created_at timestamp DEFAULT current_timestamp,
    updated_at timestamp default current_timestamp 
    on update current_timestamp

)