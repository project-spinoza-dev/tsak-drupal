
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
                        <input type="text" class="form-control" placeholder="Enter Consumer API Key" name="consumerKey" id="consumerKey" required>
                        </div>
                        <div class="form-group">
                        <label class="label label-default consumerSecret" for="consumerSecret">Consumer Secret (API Secret)</label>
                        <input type="text" class="form-control" placeholder="Enter Consumer API Secret" name="consumerSecret" id="consumerSecret" required>
                        </div>
                        <div class="form-group">
                        <label class="label label-default accessToken" for="accessToken">Access Token</label>
                        <input type="text" class="form-control" placeholder="Enter Access Token" name="accessToken" id="accessToken" required>
                        </div>
                        <div class="form-group">
                        <label class="label label-default accessTokenSecret" for="accessTokenSecret">Access Token Secret</label>
                        <input type="text" class="form-control" placeholder="Enter Access Token Secret" name="accessTokenSecret" id="accessTokenSecret" required>
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
              <div class="panel-body " ></div>
            </div>
            
        </div>
    </div>
    <!-- /.container -->

