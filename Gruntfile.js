// Обязательная обёртка
module.exports = function(grunt) {

    // Задачи
    grunt.initConfig({
        // Склеиваем
        concat: {
            js: {
                src: [
                    'js/*.js'  // Все JS-файлы в папке
                ],
                dest: 'build/scripts.js'
            },
            css: {
                src: [
                    'css/*.css'  // Все JS-файлы в папке
                ],
                dest: 'build/style.css'
            }
        },
        // Сжимаем
        uglify: {
            main: {
                files: {
                    // Результат задачи concat
                    'build/scripts.min.js': '<%= concat.js.dest %>'
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'build/style.min.css': '<%= concat.css.dest %>'
                }
            }
        },
        //запускает задачи при каждом изменении исходных файлов
        watch: {
            js: {
                files: '<%= concat.js.src %>',
                tasks: 'concat'  // Можно несколько: ['lint', 'concat']
            },
            css: {
                files: '<%= concat.css.src %>',
                tasks: 'concat'  // Можно несколько: ['lint', 'concat']
            }
        }
    });

    // Загрузка плагинов, установленных с помощью npm install
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Задача по умолчанию
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

    grunt.loadNpmTasks('grunt-contrib-watch');
};
