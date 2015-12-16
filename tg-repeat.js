'use strict'

angular.module('tgRepeat', [])
  .directive('tgRepeat', function ($compile) {
    return {
      restrict:'A',

      compile: function ($scope, $element) {

        // this is equivalent to "link:"
        return function link (scope, element, attrs) {
          let customAttr
          let splitAttr = attrs.tgRepeat.split(' in ')

          // we make the glorious assumption that 'in' was the 2nd term, so check if we have 2 
          if (splitAttr.length >= 2) {
            // if 3rd term is longer than 2 chars, check if the first 2 chars are '::'
            if ( splitAttr[1].length > 2 && splitAttr[1].split('::')[0].length === 0) {
              // at this point we should be able to assume that the user didn't specify bindOnce
              customAttr = attrs.tgRepeat
            } else {
              // we are so helpful
              splitAttr[1] = '::' + splitAttr[1]
              customAttr = splitAttr[0] + ' in ' + splitAttr[1]
            }
          }

          attrs.$set('ng-repeat', attrs.tgRepeat)
          element.removeAttr('tg-repeat')

          $compile(element)(scope)
        }
      }
    }
  })