USE freelancers_project;

CREATE TABLE `freelancers`(
    `freelance_id` BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT NOT NULL,
    `about` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `account_type` VARCHAR(255) NOT NULL,
    `service_location` VARCHAR(255) NOT NULL,
    `profile_image_id` VARCHAR(255) DEFAULT `person_place_holder2_fhahmn`
);

CREATE TABLE `users`(
    `user_id` BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `phone` VARCHAR(255) NOT NULL,
    `registration_date` TIMESTAMP NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `username` VARCHAR(255) NOT NULL UNIQUE,
    `is_admin` TINYINT NOT NULL,
    `is_confirmed` TINYINT NOT NULL DEFAULT 1
);

CREATE TABLE `freelance_category_enrollment`(
    `enrollment_id` BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `freelance_id` BIGINT NOT NULL,
    `category_id` BIGINT NOT NULL
);

CREATE TABLE `addresses`(
    `address_id` BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT NOT NULL,
    `city` VARCHAR(255) NOT NULL,
    `street` VARCHAR(255) NOT NULL,
    `building` BIGINT NOT NULL,
    `suite` BIGINT NOT NULL,
    `zip_code` VARCHAR(255) NOT NULL
);

CREATE TABLE `categories`(
    `category_id` BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `category_name` VARCHAR(255) NOT NULL UNIQUE,
    `parent_id` BIGINT
);

CREATE TABLE `reviews`(
    `review_id` BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `review_text` VARCHAR(255) NOT NULL,
    `rating` BIGINT NOT NULL,
    `reviewer_id` BIGINT NOT NULL,
    `review_date` DATE NOT NULL,
    `freelance_id` BIGINT NOT NULL
);

CREATE TABLE freelancers_portfolios (
    portfolio_id INT PRIMARY KEY auto_increment,
    freelance_id INT,
    title VARCHAR(255),
    description VARCHAR(255),
    project_url VARCHAR(255),
    creation_date DATE
);

CREATE TABLE portfolio_images (
    image_id INT PRIMARY KEY auto_increment,
    portfolio_id INT,
    image_code VARCHAR(255)
);

CREATE TABLE messages (
    message_id INT PRIMARY KEY AUTO_INCREMENT,
    sender_id INT,
    receiver_id INT,
    message_content VARCHAR(225),
    is_read TINYINT DEFAULT 0,
    timestamp TIMESTAMP NOT NULL
);

ALTER TABLE
    `freelance_category_enrollment`
ADD
    CONSTRAINT `freelance_category_enrollment_category_id_foreign` FOREIGN KEY(`category_id`) REFERENCES `categories`(`category_id`);

ALTER TABLE
    `reviews`
ADD
    CONSTRAINT `reviews_freelance_id_foreign` FOREIGN KEY(`freelance_id`) REFERENCES `freelance`(`freelance_id`);

ALTER TABLE
    `freelance`
ADD
    CONSTRAINT `freelance_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `users`(`user_id`);

ALTER TABLE
    `freelance_category_enrollment`
ADD
    CONSTRAINT `freelance_category_enrollment_freelance_id_foreign` FOREIGN KEY(`freelance_id`) REFERENCES `freelance`(`freelance_id`);

ALTER TABLE
    `freelance`
ADD
    CONSTRAINT `freelance_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `addresses`(`user_id`);

ALTER TABLE
    `freelance`
ADD
    CONSTRAINT `freelance_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `reviews`(`reviewer_id`);