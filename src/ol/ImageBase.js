/**
 * @module ol/ImageBase
 */
import {inherits} from './index.js';
import EventTarget from './events/EventTarget.js';
import EventType from './events/EventType.js';

/**
 * @constructor
 * @abstract
 * @extends {ol.events.EventTarget}
 * @param {ol.Extent} extent Extent.
 * @param {number|undefined} resolution Resolution.
 * @param {number} pixelRatio Pixel ratio.
 * @param {ol.ImageState} state State.
 */
const ImageBase = function(extent, resolution, pixelRatio, state) {

  EventTarget.call(this);

  /**
   * @protected
   * @type {ol.Extent}
   */
  this.extent = extent;

  /**
   * @private
   * @type {number}
   */
  this.pixelRatio_ = pixelRatio;

  /**
   * @protected
   * @type {number|undefined}
   */
  this.resolution = resolution;

  /**
   * @protected
   * @type {ol.ImageState}
   */
  this.state = state;

};

inherits(ImageBase, EventTarget);


/**
 * @protected
 */
ImageBase.prototype.changed = function() {
  this.dispatchEvent(EventType.CHANGE);
};


/**
 * @return {ol.Extent} Extent.
 */
ImageBase.prototype.getExtent = function() {
  return this.extent;
};


/**
 * @abstract
 * @return {HTMLCanvasElement|Image|HTMLVideoElement} Image.
 */
ImageBase.prototype.getImage = function() {};


/**
 * @return {number} PixelRatio.
 */
ImageBase.prototype.getPixelRatio = function() {
  return this.pixelRatio_;
};


/**
 * @return {number} Resolution.
 */
ImageBase.prototype.getResolution = function() {
  return /** @type {number} */ (this.resolution);
};


/**
 * @return {ol.ImageState} State.
 */
ImageBase.prototype.getState = function() {
  return this.state;
};


/**
 * Load not yet loaded URI.
 * @abstract
 */
ImageBase.prototype.load = function() {};

export default ImageBase;
