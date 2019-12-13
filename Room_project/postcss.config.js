module.exports = {
    plugins: [
        require('autoprefixer'),
        require('css-mqpacker'), //все медиа запросы сжимает в один файл
        require('cssnano') ({
            preset: [
                'default', {
                    discardComments: { 
                        removeAll: true //удаляет коментарии после сборки
                    }
                }
            ]
        })
    ]
};