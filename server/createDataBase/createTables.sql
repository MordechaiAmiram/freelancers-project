USE freelancers_project;

CREATE TABLE `freelancers`(
    `freelance_id` BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT NOT NULL,
    `about` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `account_type` VARCHAR(255) NOT NULL,
    `service_location` VARCHAR(255) NOT NULL ,
    `is_confirmed` TINYINT NOT NULL DEFAULT 0,
    `profile_image_id` VARCHAR(255)
);

CREATE TABLE `users`(
    `user_id` BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `phone` VARCHAR(255) NOT NULL,
    `registeretion_date` TIMESTAMP NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `username` VARCHAR(255) NOT NULL UNIQUE,
    `is_admin` TINYINT NOT NULL
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

CREATE TABLE `rating_data`(
    `rating_data_id` BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `freelance_id` BIGINT NOT NULL UNIQUE,
    `number_of_ratings` BIGINT NOT NULL,
    `cumulative_rating` BIGINT NOT NULL
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
    `raing_data`
ADD
    CONSTRAINT `raing_data_freelance_id_foreign` FOREIGN KEY(`freelance_id`) REFERENCES `freelance`(`freelance_id`);

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