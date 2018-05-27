<?
// пример строит список городов по начальным буквам и выбирает из него
require_once($_SERVER['DOCUMENT_ROOT'].'/config.php');

if(!isset($_GET['city_name'])){
}elseif(empty($_GET['city_name'])) die('пусто');
else{
   $city=trim(urldecode($_GET['city_name']));
   $city1=@iconv("UTF-8", "windows-1251//IGNORE",$city); // все AJAX запросы приходят в Юникоде
   if($city1)$city=$city1;  // на случай если на Windows-машине
   $city=addslashes($city);
   $res = DB::sql('SELECT * FROM '.db_prefix.'city WHERE LOWER(name)
        LIKE CONCAT("'.strtolower($city).'","%") LIMIT 5');
   while($row = DB::fetch_assoc(res)){
    $r=($row['area']?'area':'country');
    echo "<option value='" . $row['name'] . "'>" . $row['name']."
        (".DB::GetName($r,intval($row[$r])).")</option>\n";
        }
   die;
}
?>