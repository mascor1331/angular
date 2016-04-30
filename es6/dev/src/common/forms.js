/**
 * @module
 * @description
 * This module is used for handling user input, by defining and building a {@link ControlGroup} that
 * consists of
 * {@link Control} objects, and mapping them onto the DOM. {@link Control} objects can then be used
 * to read information
 * from the form DOM elements.
 *
 * This module is not included in the `angular2` module; you must import the forms module
 * explicitly.
 *
 */
export { AbstractControl, Control, ControlGroup, ControlArray } from './forms/model';
export { AbstractControlDirective } from './forms/directives/abstract_control_directive';
export { ControlContainer } from './forms/directives/control_container';
export { NgControlName } from './forms/directives/ng_control_name';
export { NgFormControl } from './forms/directives/ng_form_control';
export { NgModel } from './forms/directives/ng_model';
export { NgControl } from './forms/directives/ng_control';
export { NgControlGroup } from './forms/directives/ng_control_group';
export { NgFormModel } from './forms/directives/ng_form_model';
export { NgForm } from './forms/directives/ng_form';
export { NG_VALUE_ACCESSOR } from './forms/directives/control_value_accessor';
export { DefaultValueAccessor } from './forms/directives/default_value_accessor';
export { NgControlStatus } from './forms/directives/ng_control_status';
export { CheckboxControlValueAccessor } from './forms/directives/checkbox_value_accessor';
export { NgSelectOption, SelectControlValueAccessor } from './forms/directives/select_control_value_accessor';
export { FORM_DIRECTIVES, RadioButtonState } from './forms/directives';
export { NG_VALIDATORS, NG_ASYNC_VALIDATORS, Validators } from './forms/validators';
export { RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator } from './forms/directives/validators';
export { FormBuilder } from './forms/form_builder';
import { FormBuilder } from './forms/form_builder';
import { RadioControlRegistry } from './forms/directives/radio_control_value_accessor';
/**
 * Shorthand set of providers used for building Angular forms.
 *
 * ### Example
 *
 * ```typescript
 * bootstrap(MyApp, [FORM_PROVIDERS]);
 * ```
 */
export const FORM_PROVIDERS = [FormBuilder, RadioControlRegistry];
/**
 * See {@link FORM_PROVIDERS} instead.
 *
 * @deprecated
 */
export const FORM_BINDINGS = FORM_PROVIDERS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLU1kYU0zMTBILnRtcC9hbmd1bGFyMi9zcmMvY29tbW9uL2Zvcm1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7R0FZRztBQUNILFNBQVEsZUFBZSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxRQUFPLGVBQWUsQ0FBQztBQUVuRixTQUFRLHdCQUF3QixRQUFPLCtDQUErQyxDQUFDO0FBRXZGLFNBQVEsZ0JBQWdCLFFBQU8sc0NBQXNDLENBQUM7QUFDdEUsU0FBUSxhQUFhLFFBQU8sb0NBQW9DLENBQUM7QUFDakUsU0FBUSxhQUFhLFFBQU8sb0NBQW9DLENBQUM7QUFDakUsU0FBUSxPQUFPLFFBQU8sNkJBQTZCLENBQUM7QUFDcEQsU0FBUSxTQUFTLFFBQU8sK0JBQStCLENBQUM7QUFDeEQsU0FBUSxjQUFjLFFBQU8scUNBQXFDLENBQUM7QUFDbkUsU0FBUSxXQUFXLFFBQU8sa0NBQWtDLENBQUM7QUFDN0QsU0FBUSxNQUFNLFFBQU8sNEJBQTRCLENBQUM7QUFDbEQsU0FBOEIsaUJBQWlCLFFBQU8sMkNBQTJDLENBQUM7QUFDbEcsU0FBUSxvQkFBb0IsUUFBTywyQ0FBMkMsQ0FBQztBQUMvRSxTQUFRLGVBQWUsUUFBTyxzQ0FBc0MsQ0FBQztBQUNyRSxTQUFRLDRCQUE0QixRQUFPLDRDQUE0QyxDQUFDO0FBQ3hGLFNBQ0UsY0FBYyxFQUNkLDBCQUEwQixRQUNyQixrREFBa0QsQ0FBQztBQUMxRCxTQUFRLGVBQWUsRUFBRSxnQkFBZ0IsUUFBTyxvQkFBb0IsQ0FBQztBQUNyRSxTQUFRLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxVQUFVLFFBQU8sb0JBQW9CLENBQUM7QUFDbEYsU0FDRSxpQkFBaUIsRUFDakIsa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUNsQixnQkFBZ0IsUUFFWCwrQkFBK0IsQ0FBQztBQUN2QyxTQUFRLFdBQVcsUUFBTyxzQkFBc0IsQ0FBQztPQUMxQyxFQUFDLFdBQVcsRUFBQyxNQUFNLHNCQUFzQjtPQUN6QyxFQUFDLG9CQUFvQixFQUFDLE1BQU0saURBQWlEO0FBR3BGOzs7Ozs7OztHQVFHO0FBQ0gsT0FBTyxNQUFNLGNBQWMsR0FBNkIsQ0FBQyxXQUFXLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztBQUU1Rjs7OztHQUlHO0FBQ0gsT0FBTyxNQUFNLGFBQWEsR0FBc0IsY0FBYyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbW9kdWxlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgbW9kdWxlIGlzIHVzZWQgZm9yIGhhbmRsaW5nIHVzZXIgaW5wdXQsIGJ5IGRlZmluaW5nIGFuZCBidWlsZGluZyBhIHtAbGluayBDb250cm9sR3JvdXB9IHRoYXRcbiAqIGNvbnNpc3RzIG9mXG4gKiB7QGxpbmsgQ29udHJvbH0gb2JqZWN0cywgYW5kIG1hcHBpbmcgdGhlbSBvbnRvIHRoZSBET00uIHtAbGluayBDb250cm9sfSBvYmplY3RzIGNhbiB0aGVuIGJlIHVzZWRcbiAqIHRvIHJlYWQgaW5mb3JtYXRpb25cbiAqIGZyb20gdGhlIGZvcm0gRE9NIGVsZW1lbnRzLlxuICpcbiAqIFRoaXMgbW9kdWxlIGlzIG5vdCBpbmNsdWRlZCBpbiB0aGUgYGFuZ3VsYXIyYCBtb2R1bGU7IHlvdSBtdXN0IGltcG9ydCB0aGUgZm9ybXMgbW9kdWxlXG4gKiBleHBsaWNpdGx5LlxuICpcbiAqL1xuZXhwb3J0IHtBYnN0cmFjdENvbnRyb2wsIENvbnRyb2wsIENvbnRyb2xHcm91cCwgQ29udHJvbEFycmF5fSBmcm9tICcuL2Zvcm1zL21vZGVsJztcblxuZXhwb3J0IHtBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmV9IGZyb20gJy4vZm9ybXMvZGlyZWN0aXZlcy9hYnN0cmFjdF9jb250cm9sX2RpcmVjdGl2ZSc7XG5leHBvcnQge0Zvcm19IGZyb20gJy4vZm9ybXMvZGlyZWN0aXZlcy9mb3JtX2ludGVyZmFjZSc7XG5leHBvcnQge0NvbnRyb2xDb250YWluZXJ9IGZyb20gJy4vZm9ybXMvZGlyZWN0aXZlcy9jb250cm9sX2NvbnRhaW5lcic7XG5leHBvcnQge05nQ29udHJvbE5hbWV9IGZyb20gJy4vZm9ybXMvZGlyZWN0aXZlcy9uZ19jb250cm9sX25hbWUnO1xuZXhwb3J0IHtOZ0Zvcm1Db250cm9sfSBmcm9tICcuL2Zvcm1zL2RpcmVjdGl2ZXMvbmdfZm9ybV9jb250cm9sJztcbmV4cG9ydCB7TmdNb2RlbH0gZnJvbSAnLi9mb3Jtcy9kaXJlY3RpdmVzL25nX21vZGVsJztcbmV4cG9ydCB7TmdDb250cm9sfSBmcm9tICcuL2Zvcm1zL2RpcmVjdGl2ZXMvbmdfY29udHJvbCc7XG5leHBvcnQge05nQ29udHJvbEdyb3VwfSBmcm9tICcuL2Zvcm1zL2RpcmVjdGl2ZXMvbmdfY29udHJvbF9ncm91cCc7XG5leHBvcnQge05nRm9ybU1vZGVsfSBmcm9tICcuL2Zvcm1zL2RpcmVjdGl2ZXMvbmdfZm9ybV9tb2RlbCc7XG5leHBvcnQge05nRm9ybX0gZnJvbSAnLi9mb3Jtcy9kaXJlY3RpdmVzL25nX2Zvcm0nO1xuZXhwb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJy4vZm9ybXMvZGlyZWN0aXZlcy9jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcbmV4cG9ydCB7RGVmYXVsdFZhbHVlQWNjZXNzb3J9IGZyb20gJy4vZm9ybXMvZGlyZWN0aXZlcy9kZWZhdWx0X3ZhbHVlX2FjY2Vzc29yJztcbmV4cG9ydCB7TmdDb250cm9sU3RhdHVzfSBmcm9tICcuL2Zvcm1zL2RpcmVjdGl2ZXMvbmdfY29udHJvbF9zdGF0dXMnO1xuZXhwb3J0IHtDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2Zvcm1zL2RpcmVjdGl2ZXMvY2hlY2tib3hfdmFsdWVfYWNjZXNzb3InO1xuZXhwb3J0IHtcbiAgTmdTZWxlY3RPcHRpb24sXG4gIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yXG59IGZyb20gJy4vZm9ybXMvZGlyZWN0aXZlcy9zZWxlY3RfY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5leHBvcnQge0ZPUk1fRElSRUNUSVZFUywgUmFkaW9CdXR0b25TdGF0ZX0gZnJvbSAnLi9mb3Jtcy9kaXJlY3RpdmVzJztcbmV4cG9ydCB7TkdfVkFMSURBVE9SUywgTkdfQVNZTkNfVkFMSURBVE9SUywgVmFsaWRhdG9yc30gZnJvbSAnLi9mb3Jtcy92YWxpZGF0b3JzJztcbmV4cG9ydCB7XG4gIFJlcXVpcmVkVmFsaWRhdG9yLFxuICBNaW5MZW5ndGhWYWxpZGF0b3IsXG4gIE1heExlbmd0aFZhbGlkYXRvcixcbiAgUGF0dGVyblZhbGlkYXRvcixcbiAgVmFsaWRhdG9yXG59IGZyb20gJy4vZm9ybXMvZGlyZWN0aXZlcy92YWxpZGF0b3JzJztcbmV4cG9ydCB7Rm9ybUJ1aWxkZXJ9IGZyb20gJy4vZm9ybXMvZm9ybV9idWlsZGVyJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXJ9IGZyb20gJy4vZm9ybXMvZm9ybV9idWlsZGVyJztcbmltcG9ydCB7UmFkaW9Db250cm9sUmVnaXN0cnl9IGZyb20gJy4vZm9ybXMvZGlyZWN0aXZlcy9yYWRpb19jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcbmltcG9ydCB7VHlwZX0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcblxuLyoqXG4gKiBTaG9ydGhhbmQgc2V0IG9mIHByb3ZpZGVycyB1c2VkIGZvciBidWlsZGluZyBBbmd1bGFyIGZvcm1zLlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogYm9vdHN0cmFwKE15QXBwLCBbRk9STV9QUk9WSURFUlNdKTtcbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3QgRk9STV9QUk9WSURFUlM6IFR5cGVbXSA9IC8qQHRzMmRhcnRfY29uc3QqL1tGb3JtQnVpbGRlciwgUmFkaW9Db250cm9sUmVnaXN0cnldO1xuXG4vKipcbiAqIFNlZSB7QGxpbmsgRk9STV9QUk9WSURFUlN9IGluc3RlYWQuXG4gKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IEZPUk1fQklORElOR1MgPSAvKkB0czJkYXJ0X2NvbnN0Ki8gRk9STV9QUk9WSURFUlM7XG4iXX0=