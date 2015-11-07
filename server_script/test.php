<?php
if (true) {
    if (isset($_POST["action"]) && !empty($_POST["action"])) { //Checks if action value exists
        $action = $_POST["action"];
        test_function();
    }
}



//Function to check if the request is an AJAX request
function is_ajax(){
    return TRUE;
    //return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
}
function test_function(){
    $return         = $_POST;
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
        $ip = $_SERVER['REMOTE_ADDR'];
    }
    $return["json"] = json_encode($return);
        ini_set('date.timezone', 'UTC');
        file_put_contents("data.sav", '@UTC '.date('Y-m-d').'  '.date('H:i:s', time() - date('Z')).' : '.$return['action']." from $ip<br>", FILE_APPEND | LOCK_EX);

    
}