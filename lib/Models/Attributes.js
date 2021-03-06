
/**
 * PepipostAPIV10Lib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ) on 08/20/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of Attributes
 *
 * @constructor
 */
Attributes = function (obj) {
    if(!obj) {
        this.nAME = null;     
        this.rEGID = null;     
        //Append to variable dictionary
        this._variableDict['nAME'] = 'NAME';
        this._variableDict['rEGID'] = 'REGID';
    } else {
        this.nAME = obj.NAME;
        this.rEGID = obj.REGID;
        //Append to variable dictionary
        this._variableDict['nAME'] = 'NAME';
        this._variableDict['rEGID'] = 'REGID';
    }
};

Attributes.prototype = new BaseModel();
Attributes.prototype.constructor = Attributes;

/**
 * TODO: Write general description for this method
 *
 * @return {array|null}
 */
Attributes.prototype.getNAME = function() {
    return this.nAME;
};

/**
 * Setter for NAME
 * 
 * @param {array|null} value 
 */
Attributes.prototype.setNAME = function(value) {
    this.nAME = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array|null}
 */
Attributes.prototype.getREGID = function() {
    return this.rEGID;
};

/**
 * Setter for REGID
 * 
 * @param {array|null} value 
 */
Attributes.prototype.setREGID = function(value) {
    this.rEGID = value;
};


module.exports = Attributes;