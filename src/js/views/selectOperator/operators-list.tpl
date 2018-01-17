<div ng-if="! selectedOperator" class="row operators-container">
	<div class="col-12">
		<center><h3>Choose an operator to refill</h3></center>
		
	</div>
	<div class="col-lg-4 col-sm-6 col-12" ng-repeat="operator in operators">
		<button class="btn btn-outline-secondary" ng-click="selectOperator(operator)">
			<img ng-src="{{operator.logo}}" alt="">
		</button>
	</div>
</div>

<div ng-if="selectedOperator" class="row">
	<div class="col-12">
		<center>
			<img ng-src="{{selectedOperator.logo}}">
		</center>
	</div>

	<div class="col-0 col-md-3">
	</div>
	<div class="col-12 col-md-6">
		<div class="input-group">
			<span class="input-group-addon">Телефон </span>
			<span class="input-group-addon">8 </span>
			<input class="form-control" ui-us-phone-number-mask type="text" ng-model="userData.phone" focus-on="phone" ng-focus="onTextClick($event)">
		</div>
	</div>
	<div class="col-0 col-md-3">
	</div>

	<div class="col-0 col-md-3">
	</div>
	<div class="col-12 col-md-6">
		<div class="input-group">
			<span class="input-group-addon">Amount</span>
			<input class="form-control" type="number" ng-model="userData.amount" min="1" max="1000" focus-on="amount" ng-focus="onTextClick($event)"><span class="input-group-addon">rub </span>
		</div>
	</div>
	<div class="col-0 col-md-3">
	</div>

	<div class="col-0 col-md-3">
	</div>
	<div class="col-12 col-md-6">
		<center>
			<button class="btn btn-primary" ng-click="goBack()">Cancel</button>
			<button class="btn btn-primary" ng-click="refill()">Refill</button>
		</center>
	</div>
	<div class="col-0 col-md-3">
	</div>
</div>

<div class="row">
	<div class="col-12">
	    <flash-message>
	        <div class="flash-div">{{ flash.text}}</div>
	    </flash-message>
	</div>
</div>

<div class="cover-modal" ng-show="showInfo.active" >
    <div id="modal-refill-result">

        <div class="row" ng-if="showInfo.success">
            <div class="col md-12">
                <center>
        			<img src="img/success.png" alt="">
                    {{ showInfo.msg }}
                </center>
            </div>
        </div>
        <div class="row" ng-if="!showInfo.success">
            <div class="col md-12">
                <center>
        			<img src="img/failure.png" alt="">
                    {{ showInfo.msg }}
                </center>
            </div>
        </div>
        <div class="row">
            <div class="col md-12">
            	<center>
	               	<button class="btn btn-primary" ng-click="closeInfo()">Close</button>
            	</center>
            </div>
        </div>
    </div>
</div>
