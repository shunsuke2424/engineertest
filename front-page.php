<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- <link rel="stylesheet" href="style.css"> -->
    <?php wp_head();?>
</head>
<body>
    <div class="search">
        <div class="search__map">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/map.png" alt="">
        </div>
        <div class="search__select">
            <form action="">
                <select name="" id="select">
                    <option hidden>選択してください</option>
                    <option value="hokkaido">北海道</option>
                    <option value="tohoku">東北地方</option>
                    <option value="chubu">中部地方</option>
                    <option value="kanto">関東地方</option>
                    <option value="kinki">近畿地方</option>
                    <option value="chugoku">中国地方</option>
                    <option value="shikoku">四国地方</option>
                    <option value="kyushu">九州地方</option>
                </select>
            </form>
            <ul class="search__select-list" id="list">
            </ul>
        </div>
    </div>
    <!-- <script src="main.js"></script> -->
    <?php wp_footer();?>
</body>
</html>