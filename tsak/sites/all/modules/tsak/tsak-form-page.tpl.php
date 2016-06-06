<?php

global $user;
$uid = $user->uid;
$consumerKey ='';
$consumerKeySecret ='';
$accessToken ='';
$accessTokenSecret = '';

$query = db_query('SELECT n.tsakuid, n.consumer_key, n.consumer_key_secret, n.access_token, n.access_token_secret FROM {tsakapp} n WHERE n.tsakuid = :uid', array(':uid' => $uid));
$result = $query->fetchAll();
foreach ($result as $record) {

   $consumerKey = $record->consumer_key;
   $consumerKeySecret = $record->consumer_key_secret;
   $accessToken = $record->access_token;
   $accessTokenSecret = $record->access_token_secret;
   //echo $consumerKey;
//print "<pre>".print_r($result,true)."</pre>";
}

 
                    

?>
    <!-- Page Content -->
    <div class="container">
        <!-- First Featurette -->

        <div class="featurette " id="command">
            <div class="command-cont panel panel-default">
                <div class="panel panel-default">
                <div class="panel-heading">Twitter Swiss Army Knife</div>
                <div class="panel-body">

                <form id="command-form-id" class="command-form" action="/commands-run" method="post">
                    <div class="form-group">
                    <label class="label label-default" for="commands-select">Select Command</label>
                    <select class="form-control" id="commands-select">
                    </select>
                    </div>
                    <div class="commands-selected">
                        
                    </div>
                    <div class="checkbox-div checkbox-area"></div>
                    <div class="applicationkeys" style="display: none;">
                        <div class="form-group">
                        <label class="label label-default consumerKey" for="consumerKey">Consumer Key (API Key)</label>
                        <input type="text" class="form-control" placeholder="Enter Consumer API Key" name="consumerKey" id="consumerKey"  value="<?php echo $consumerKey; ?>" >
                        </div>
                        <div class="form-group">
                        <label class="label label-default consumerSecret" for="consumerSecret">Consumer Secret (API Secret)</label>
                        <input type="text" class="form-control" placeholder="Enter Consumer API Secret" name="consumerSecret" id="consumerSecret"  value="<?php echo $consumerKeySecret; ?>" >
                        </div>
                        <div class="form-group">
                        <label class="label label-default accessToken" for="accessToken">Access Token</label>
                        <input type="text" class="form-control" placeholder="Enter Access Token" name="accessToken" id="accessToken"  value="<?php echo $accessToken; ?>" >
                        </div>
                        <div class="form-group">
                        <label class="label label-default accessTokenSecret" for="accessTokenSecret">Access Token Secret</label>
                        <input type="text" class="form-control" placeholder="Enter Access Token Secret" name="accessTokenSecret" id="accessTokenSecret"  value="<?php echo $accessTokenSecret; ?>" >
                        </div>
                        <div class="form-group">
                        <div id="message-box"></div>
                        <div class="save-key"> <ul class="nav nav-tabs"> 
                            <li class=""><a href="#" id="savekeyid" class="savekey">Save Twitter API Keys</a></li>
                        </ul></div>
                        </div>
                    </div>
                    <div class="div-margin-top">
                        <div class="key-conf"><a href="#" id="key-conf-id" class="key-conf-show">Show Keys Configuration</a></div>
                        <button type="button" class="btn btn-primary" id="submitform">Submit</button>
                    </div>
                    
                </form>
                </div>
                </div>
            </div>
            <div class="panel panel-default" id="output-panel" style="display: none;">
              <label class="label label-success">Output Json</label></br>
              <pre><code id="json"></code></pre>
            </div>            
        </div>
    </div>

    <!-- /.container -->
<?php 
$exists = db_query("SELECT tsakuid FROM {tsakapp} WHERE tsakuid = $uid");
                    if($exists->rowCount() > 0){
                      $existing = $exists->rowCount();
                     }
                     else{
                        $existing = $exists->rowCount();
                        drupal_set_message($exists->rowCount());
                     }

/* Jquery onclick save link*/
    drupal_add_js('jQuery(document).ready(function () { 

        jQuery("#savekeyid").click(function(){
            
            var exist = '.$existing.';
            var uid = '.$uid.';
            var consumerKey = jQuery("#consumerKey").val();
            var consumerSecret = jQuery("#consumerSecret").val();
            var accessToken = jQuery("#accessToken").val();
            var accessTokenSecret = jQuery("#accessTokenSecret").val();
                if (consumerKey == ""){
                    alert("enter twitter consumerKey value");
                }
                else if (consumerSecret == ""){
                    alert("enter twitter consumerSecret value");
                }
                else if (accessToken == ""){
                    alert("enter twitter accessToken value");
                }
                else if (accessTokenSecret == ""){
                    alert("enter twitter accessTokenSecret value");
                }
                else{
                    if(exist == 0){
                        saveTsakKeys(uid, consumerKey,consumerSecret,accessToken,accessTokenSecret);
                    
                    }
                    else{
                        updateTsakKeys(uid, consumerKey,consumerSecret,accessToken,accessTokenSecret);

                    }
                    
                    
                }
    });

    });',
    array(
        'type' => 'inline', 
        'scope' => 'footer', 
        'weight' => 5
    )
);
?>

