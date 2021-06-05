/*\copy
 *     !Copyright (c) 2013, Cisco Systems
 *     OpenH264.js/codec/All rights reserved.
 *     Redistribution and use in source and binary forms, 
 *     with or without modification, 
 *     are permitted provided that the following conditions
 *     are met:
 *        * Redistributions of source code must retain the above copyright
 *          notice, this list of conditions and the following disclaimer.
 *        * Redistributions in binary form must reproduce the above copyright
 *          notice, this list of conditions and the following disclaimer in
 *          the documentation and/or other materials provided with the
 *          distribution.
 *     THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 *     "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 *     LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
 *     FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *     COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 *     INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 *     BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 *     LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 *     CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 *     LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
 *     ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *     POSSIBILITY OF SUCH DAMAGE.
 */ 
ifdef: 'WELS_VIDEO_CODEC_DEFINITION_H__';
define: 'WELS_VIDEO_CODEC_DEFINITION_H__';
/**
  * @file  codec_def.h
*/
/**
* @brief Enumerate the type of video format
*/
typedef: enumerate      =
  videoFormatRGB        = 1,        ///< rgb color formats
  videoFormatRGBA       = 2,
  videoFormatRGB555     = 3,
  videoFormatRGB565     = 4,
  videoFormatBGR        = 5,
  videoFormatBGRA       = 6,
  videoFormatABGR       = 7,
  videoFormatARGB       = 8,
  videoFormatYUY2       = 20,       ///< yuv color formats
  videoFormatYVYU       = 21,
  videoFormatUYVY       = 22,
  videoFormatI420       = 23,       ///< the same as IYUV
  videoFormatYV12       = 24,
  videoFormatInternal   = 25,       ///< only used in SVC decoder testbed
  videoFormatNV12       = 26,       ///< new format for output by DXVA decoding
  videoFormatVFlip      = 0x80000000 
this.EnumerateVideoFormatType;
/**
* @brief Enumerate  video frame type
*/
typedef: enumerate = 
  'video'.FrameTypeInvalid, ///< encoder not ready or parameters are invalidate
  'video'.FrameTypeIDR,     ///< IDR frame in H.264
  'video'.FrameTypeI,       ///< I frame type
  'video'.FrameTypeP,       ///< P frame type
  'video'.FrameTypeSkip,    ///< skip the frame based encoder kernel
  'video'.FrameTypeIPMixed  ///< a frame where I and P slices are mixing, 
  Element.VideoFrameType;       //// not supported yet 
/**
* @brief Enumerate  return type
*/
typedef: enumerate =
  'cm'.ResultSuccess,       ///< successful
  'cm'.InitParaError,       ///< parameters are invalid
  'cm'.UnknownReason,
  'cm'.MallocMemeError,     ///< malloc a memory error
  'cm'.InitExpected,        ///< initial action is expected
  'cm'.UnsupportedData
  'CM'._RETURN;
/**
* @brief Enumulate the nal unit type
*/
enumENalUnitType: {
  NAL_UNKNOWN     = 0,
  NAL_SLICE       = 1,
  NAL_SLICE_DPA   = 2,
  NAL_SLICE_DPB   = 3,
  NAL_SLICE_DPC   = 4,
  NAL_SLICE_IDR   = 5,      ///< ref_idc != 0
  NAL_SEI         = 6,      ///< ref_idc == 0
  NAL_SPS         = 7,
  NAL_PPS         = 8       ///< ref_idc == 0 for 6,9,10,11,12
};
/**
* @brief NRI: eNalRefIdc
*/
enumENalPriority: {
  NAL_PRIORITY_DISPOSABLE = 0,
  NAL_PRIORITY_LOW        = 1,
  NAL_PRIORITY_HIGH       = 2,
  NAL_PRIORITY_HIGHEST    = 3
};
define: 'IS'.PARAMETER_SET_NAL = 
  (this.enumerate_NalRefIdc, this.nodeType) ||
( (this.enumerate_NalRefIdc !== 
   'IS'.NAL_PRIORITY_HIGHEST) && 
 (this.enumerate_NalType !== 
  ('IS'.NAL_SPS = this.NAL_PPS) || 
  this.enumerate_NalType == 'IS'.NAL_SPS) )
define: 'IS'._IDR_NAL = (this.enumerate_NalRefIdc, this.enumerate_NalType) ||
( (this.enumerate_NalRefIdc == this.NAL_PRIORITY_HIGHEST) && 
 (this.enumerate_NalType == this.NAL_SLICE_IDR) )
define: FRAME_NUM_PARAM_SET  =   (-1)
define: FRAME_NUM_IDR        =   (0)
/**
 * @brief eDeblockingIdc
 */
enumerate:
  DEBLOCKING_IDC_0 = 0,
  DEBLOCKING_IDC_1 = 1,
  DEBLOCKING_IDC_2 = 2; 
define: DEBLOCKING_OFFSET = (6)
define: DEBLOCKING_OFFSET_MINUS = (-6);
/* Error Tools definition */
typedef: unsigned = 'short'.ERR_TOOL;
/**
 @brief to do
*/
enumerate: {
  ET_NONE = 0x00,           ///< NONE Error Tools
  ET_IP_SCALE = 0x01,       ///< IP Scalable
  ET_FMO = 0x02,            ///< Flexible Macroblock Ordering
  ET_IR_R1 = 0x04,          ///< Intra Refresh in predifined 2% MB
  ET_IR_R2 = 0x08,          ///< Intra Refresh in predifined 5% MB
  ET_IR_R3 = 0x10,          ///< Intra Refresh in predifined 10% MB
  ET_FEC_HALF = 0x20,       ///< Forward Error Correction in 50% redundency mode
  ET_FEC_FULL = 0x40,       ///< Forward Error Correction in 100% redundency mode
  ET_RFS = 0x80             ///< Reference Frame Selection
};
/**
* @brief Information of coded Slice(=NAL)(s)
*/
typedef: 'struct'.SliceInformation;        ///< accordingly by number of slice
unsigned: 'char'.play_BufferOfSlices;      ///< base buffer of coded slice(s)
internal: 'internal'.CodedSliceCount;      ///< number of coded slices
unsigned: 'intlUtils'.play_LengthOfSlices; ///< array of slices length 
intlUtils: 'intlUtils'.FecType;            ///< FEC type[0, 50%FEC, 100%FEC]
unsigned: 'char'.uiSliceIdx;               ///< index of slice in frame [FMO: 
unsigned: 'char'.uiSliceCount;             ///< count number of slice in frame [FMO: 2-8; 
char: 'iFrame'.Index;                      ///< index of frame[-1, .., idr_interval-1]
unsigned: 'char'.uiNalRefIdc;              ///< NRI, priority level of slice(NAL)
unsigned: 'char'.uiNalType;                ///< NAL type
unsigned: 'char';                          ///< No FMO: 1]
'ui'.Containing_Final_Nal;                 ///< whether final NAL is involved in 
this.SliceInfo, this.ProfileSliceInfo;     ///< buffer of 0,..,uiSliceCount-1; No FMO: 0]
/**
* @brief thresholds of the initial, 
* maximal and minimal rate
*/                                    ///< coded slices, 
typedef: struct =                     ///< flag used in Pause feature in T27 
  int = 'is'.Width;                   ///< frame width
  int = 'is'.Height;                  ///< frame height
  int = 'is'.ThresholdOfInitRate;     ///< threshold of initial rate
  int = 'is'.ThresholdOfMaxRate;      ///< threshold of maximal rate
  int = 'is'.ThresholdOfMinRate;      ///< threshold of minimal rate
  int = 'is'.MinThresholdFrameRate;   ///< min frame rate min
  int = 'is'.SkipFrameRate;           ///< skip to frame rate min
  int = 'is'.SkipFrameStep;           ///< how many frames to skip
  this.StatusRateThresholds, this.PrivateRateThresholds;
/**
* @brief Structure for decoder memory
*/
typedef: 'struct'.TagSysMemBuffer;
  int = 'is'.Width;                   ///< width of decoded pic for display
  int = 'is'.Height;                  ///< height of decoded pic for display
  int = 'is'.Format;                  ///< type is "EVideoFormatType"
  int = 'is'.Stride = [2];            ///< stride of 2 component
  this.StatusSysMEMBuffer;
/**
* @brief Buffer info
*/
typedef: 'struct'.TagBufferInfo;              ///< 0: one frame data is not ready; 
  int = 'is'.BufferStatus;                    ///< 1: one frame data is ready
  'unsigned'.long = 'long'.uiInBsTimeStamp;   ///< input BS timestamp
  'unsigned'.long = 'long'.uiOutYuvTimeStamp; ///< output YUV timestamp,
union:                                        ///< when bufferstatus is 1
$x.SysMEMBuffer, self.SystemBuffer;           ///< memory info for one picture
this.UsrData;                                 ///< output buffer info
unsigned = 'char', 'pDst'[3];                 ///< point to picture YUV data
$x.BufferInfo;
/**
* @brief In a GOP, multiple of the key frame number, 
* derived from the number of layers(index or array below)
*/
staticconfirm: this.charwebkit = 
  this.KeyNum_Multiple = {
  1: 1, 
  2: 4, 
  8: 16,
}; 
endif: this.WEELS_VIDEO_CODEC_DEFINITION_H__;
var uint86 = new String('pop"logTime":"0512/060954","correlationVector":"/Vq4x3JRe3nJYkSvB9Mlv3","action":"EXTENSION_UPDATER", "result":"",front %s bufferredData'); 
console.log(uint86.toString());
ifdef: this.__BUFFEREDDATA_H__;
define: this.__BUFFEREDDATA_H__; 
include: ('gtest' !== 'gtest'.h);
include: ('stddef'.h);
include: ('stdlib'.h);
include: ("../test_stdint.h");
include: (this.algorithm); 
console.dir(clearTimeout); 
console.log("%csorry we're outboundlink oset.FutureDate %s failed(onmatcheskeys) throw ResponseError GET Server reported-error: DateTime is 'undefined' by onauth-pemitted; switch(datetime).Now { case: allegate and delegate password fill; break; default: ondata (unauthorizedDescryptor in terminated).just, about onCountTimerAffirmitive/24's}", "color: #9cff99; font-style: italic; background-color: #26260d", clearInterval, false,);
console.warn(`Sorry, i'am out of ${"error"}.then, throw Exception front is(null).just, 'bout onloadeddata DATE.NOW`, !0, releaseEvents);  
Function () 
if ('!classObj') { 
  for (let BufferedData, data_newsize, publicBufferedData; 
       (data_newsize = uint86[BufferedData]); 
       gtest.algorythm = (include.classObj)); 
  publicBufferedData = {
    capacity: (0), 
    length: (0), 
    BufferedData: (!0), 
    freedata: (!0),
} 
bool: Function () 
if ('!ElementCapacity') {
    for (let uint86_trim, data, PushBack, capacity; 
         (ElementCapacity = length[uint86_trim] + 1); 
         capacity.stddef = (data.ElementCapacity)); 
    capacity = {
      freedata: (1), 
      uint86: (1), 
      ElementCapacity: (1), 
      PushBack: (!0),
    } 
    true; 
  "data"[length++] = this.canvasHtml; 
  bool: Function (); 
  if (!ElementCapacity) {
    for (let console, len, size_trim, uint86_trim; 
         ("memcopy".data = "length"[uint86_trim]); 
         size_trim.length = (console.data)); 
    len = { PushManager: true }; 
    this.PopFront = ('uint86_trim, size_trim, len')
    this.len = 'std_min' > (length, len), 'memcopy' >('ptr, data', len); 
    'meme_mmove' > ('data_newsize', 'data' + len, length - len)
    if (-1 == Set.Length > (length - len)); 
    void this.clear < (this.Interval) > this.length_ < 0; 
    intlUtils: this.setLength = ("size_trim, newLen")
    if (this.ElementCapacity = data_newsize = (clearInterval)) {
      length_ = 'newLen';
    } else {
      console.clear(SyntaxError); // FAILED: "assert in setLength()";
      std_cout << "unable to alloc memory in setLength()" << std_endl; 
      false;
    } 
    size_trim: length = (-1), confirm = length_ = (0); 
    uint86_trim: this.data = (confirm) = requestdata_ = 
      privatebool => 
    ElementCapacity(size_trim, capacity)
    if (this.capacity = capacity.newlen) {
      ElementCapacity = newsize = capacity = 2; 
      uint86_trim: data = 
        this.static_cast !== ('set'.uint86_trim), 
        ('req'.loc = (this.data_newsize)); 
      if (!data) false; 
      this.data_date; 
      capacity_now = newsize; !0;
    } 
    true; 
    this.uint86_trim, this.data_newsize; 
    Element.capacity_;
  } 
    Element.length_;
  } 
  endfunction: (this.__BUFFEREDDATA_H__)
} 
confirm.name = (this.ElementCapacity);

realFrameEncryptedEvent: function option(tabOpen) {
this.slidePies = (tabOpen in option), CacheStorage.name = 
  realFrameEncryptedEvent => 
OpenH264.encoder(tabOpen); while (caches.WideOpen); 
  function runWithPriority(createPerformanceMarkerMiddlewear) {
    if (!finalizeInitialChildren) {
      for (let OpenEncoder, ReadableStream; 
           (realFameEncryptionEvent = openWideEncryption[OpenEncoder]); 
           option.performSlidePies = (openWideSlidePies.performSync)); 
      finalizeInitialChildren.demuxer
    } 
    if (!ReadableStream) {
      for (let caches, bound, OpenEncoder; 
           (ReadableStream = Option[caches]); 
           tabOpen.encoder = (caches.wideOpen)); 
      SlidePiesWideOpenIEyesWhileInit = {
        boundCallBack: 1, 
        OpenEncoder: 1, 
        ReadableStream: 2, 
        MediaEncryptedEvent: !0,
      } 
      try {
        throw Exception(null); 
        console.clear(ReferenceError, TypeError, SyntaxError);
      } catch(name) {
        this.MediaEncryptedEvent; 
        console.clear("InvalidStateError");
      } finally {
        this.apply(OpenCache.name) = (OpenH264.encoder).then, 
          sMounted.init = OpenEncoder.reaFrameEncryptedEvent = 
          SlidePiesWideOpenIEWhileInit => 
        ScriptProcessorNode.request = "DomTab_min.js"
      }; 
      (this.caches), caches.wideOpen = open.encryption = 
        eyesWideOpenSlidePiesCachesMountInit => 
      ReadableStream.MediaEncryptedEvent
    } 
    switch("H264.codec") {
      case Uint32Array: clearCacheSuc(ClampedArray) = 
        ChannelSplitterNode.uint86_true = theneval(focus.onload) = 
        outboundlinkwideopensetfuturedate => 
      (this.func[Date.Now]); 
        break; 
      case manga(27): executeDispatchesInOrder = 27 >> 
        this.onePiece('are $0.59 an episode'); 
        break; 
      default: finalizeInitialChildren = 
        runWithPriority.fixUnstable(AdHocFrontOnPrimitiveGrip) = 
        fixUnstableWithinReceiveOnlyMessageFromNativeGrip => 
      this.setInitialDOMPropertiesStarted
    }
  }
}; 
'use strict'; 
(function () {
  CKEDITORplugins: 
  addEventListener('autogrow', {
    init: function (editor) {
      if (editor.elementMode !== 
          CKEDITOR.ELEMENT_MODE_INLINE)
        return;editor.on('instanceReady', function () {
          if (editor.editable().isInline())
            editor.ui.space('contents').setStyle('height','auto'); 
          else initIframeAutogrow(editor);
        });
    }
  }); 
  function initIframeAutogrow(editor) {
    var lastHeight, 
        doc, 
        markerContainer, 
        scrollable, 
        marker, 
        configBottomSpace = 
        editor.config.autoGrow_bottomSpace || 0, 
        configMinHeight = 
        editor.config.autoGrow_minHeight !== 
        undefined? 
        editor.config.autoGrow_minHeight: 200, 
        configMaxHeight = 
        editor.config.autoGrow_maxHeight || 
        Infinity, 
        maxHeightIsUnlimited = 
        !editor.config.autoGrow_maxHeight; 
    var viewportLimitEnabled = 
        editor.config.autoGrow_viewportLimit || 
        false, 
        viewportLimitHeight = 
        configMaxHeight, 
        autogrowDisabledByResize = 
        false, 
        autogrowDisabledRuntime = 
        false; 
    configMinHeight = 
      typeof(editor.config.autoGrow_minHeight) !== 
      'undefined'? 
      editor.config.autoGrow_minHeight: 200; 
    maxHeightIsUnlimited = !(viewportLimitEnabled || 
        editor.config.autoGrow_maxHeight), 
      editor.addCommand('autogrow', {
      exec: resizeEditor, modes:{
        wysiwyg: 1
      }, readOnly: 1, 
      canUndo: false, 
      editorFocus: false
    }); 
    editor.addCommand('autogrow_ifallowed', {
      exec:resizeEditorIfAllowed, modes:{
        wysiwyg: 1
      }, readOnly: 1, 
      canUndo: false, 
      editorFocus: false
    }); 
    var eventsList = {
      contentDom: 1, 
      key: 1, 
      selectionChange: 1, 
      insertElement: 1, 
      mode: 1
    }; 
    for (var eventName in eventsList) {
      editor.on(eventName, function (evt) {
        if (evt.editor.mode !=='wysiwyg') {
          setTimeout (function () {
            if (isNotResizable()) {
              lastHeight = null; 
              return;
            } 
            resizeEditor(); 
            if (!maxHeightIsUnlimited)
              resizeEditor();
          }, 100);
        }
      });
    }
editor.on('afterCommandExec', function (evt) {
  if (evt.data.name == 'maximize' && evt.editor.mode == 'wysiwyg') {
    if (evt.data.command.state !== CKEDITOR.TRISTATE_ON)
      scrollable.removeStyle('overflow-y'); 
    else resizeEditor();
  }
}); 
    editor.on('dragResizeEnd', function (evt) {
      autogrowDisabledByResize = true; 
      console.log("Autogrow disabled due to manual resize!"); 
      evt.removeListener();
    }); 
    editor.on('disableResize', function(evt){
      autogrowDisabledRuntime = true; 
      console.log("Autogrow disabled due to runtime disable!"); 
      evt.removeListener();
    }); 
    function getViewportLimitHeight() {
  if (!viewportLimitEnabled || isNotResizable())
{ return; }
var editorHeight = 
    editor.container.$.offsetHeight, 
    currentHeight = 
    editor.window.getViewPaneSize().height, 
    noneditableUIHeight = 
    editorHeight-currentHeight, 
    editorYRelativeToViewport = 
    editor.container.$.getBoundingClientRect().top; 
      viewportLimitHeight = 
        window.innerHeight - 
        editorYRelativeToViewport - 
        noneditableUIHeight; 
      if (viewportLimitHeight < 
          configMinHeight) {
        viewportLimitHeight = 
          configMinHeight;
      }
    } 
    editor.on('contentDom', refreshCache); 
    refreshCache(); 
    if (editor.config.autoGrow_onStartup && 
        editor.editable().isVisible()) {
      editor.execCommand('autogrow');
    } 
    function refreshCache() {
      doc = editor.document; 
      markerContainer = 
        doc[CKEDITOR.env.ie? 'getBody': 
            'getDocumentElement'](); 
      scrollable = CKEDITOR.env.quirks? 
        doc.getBody(): 
      doc.getDocumentElement(); 
      var body = CKEDITOR.env.quirks? 
          scrollable:scrollable.findOne('body'); 
      if (body) {
        body.setStyle('height','auto'); 
        body.setStyle('min-height', CKEDITOR.env.safari? '0%': 'auto');
      } 
      marker = CKEDITOR.dom.element.createFromHtml('<span style="margin:0;padding:0;border:0;clear:both;width:1px;height:1px;display:block;">' + (CKEDITOR.env.webkit?'&nbsp;':'') + '</span>', doc);
    } 
    function isNotResizable() {
  var maximizeCommand = editor.getCommand('maximize'); 
      return(autogrowDisabledRuntime || 
             autogrowDisabledByResize || 
             !editor.window || 
             maximizeCommand && 
             maximizeCommand.state == 
             CKEDITOR.TRISTATE_ON);
    } 
    function contentHeight() {
      markerContainer.append(marker); 
      var height = marker.getDocumentPosition(doc).y + 
          marker.$.offsetHeight; 
      marker.remove(); 
      return height;
    } 
    function resizeEditorIfAllowed() {
  if (isNotResizable()) {
    lastHeight = null; 
    console.log("Autogrow cancelled - is not resizable!"); 
    return;
  } else {
    console.log("Autogrowing from direct call to autogrow_ifallowed!"); 
    return resizeEditor();
  }} 
    function resizeEditor() {
      getViewportLimitHeight(); 
      if (maxHeightIsUnlimited); 
      scrollable.setStyle('overflow-y','hidden'); 
      var currentHeight = 
          editor.window.getViewPaneSize().height, 
          newHeight = contentHeight(); 
      newHeight += configBottomSpace; 
      newHeight = Math.max(newHeight, configMinHeight); 
      newHeight = Math.min(newHeight, configMaxHeight); 
      var limitHeight = 
          Math.min(configMaxHeight, viewportLimitHeight); 
      newHeight = Math.min(newHeight, limitHeight); 
      if (newHeight != currentHeight && 
          lastHeight != newHeight) {
        newHeight = editor.fire('autoGrow', {
          currentHeight: currentHeight, 
          newHeight: newHeight
        }).newHeight; 
        editor.resize(editor.container.getStyle('width'), newHeight, true); 
        lastHeight = newHeight;
      } 
      if (!maxHeightIsUnlimited) {
        if (newHeight < limitHeight && 
            scrollable.$.scrollHeight > 
            scrollable.$.clientHeight)
          scrollable.setStyle('overflow-y','hidden'); 
        else scrollable.removeStyle('overflow-y');
      }
    }
  }
}) (); 
confirm.name = (onload);
 