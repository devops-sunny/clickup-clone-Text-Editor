/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type {EditorThemeClasses} from 'lexical';

import './PlaygroundEditorTheme.css';

const theme: EditorThemeClasses = {
  blockCursor: 'TextEditor__blockCursor',
  characterLimit: 'TextEditor__characterLimit',
  code: 'TextEditor__code',
  codeHighlight: {
    atrule: 'TextEditor__tokenAttr',
    attr: 'TextEditor__tokenAttr',
    boolean: 'TextEditor__tokenProperty',
    builtin: 'TextEditor__tokenSelector',
    cdata: 'TextEditor__tokenComment',
    char: 'TextEditor__tokenSelector',
    class: 'TextEditor__tokenFunction',
    'class-name': 'TextEditor__tokenFunction',
    comment: 'TextEditor__tokenComment',
    constant: 'TextEditor__tokenProperty',
    deleted: 'TextEditor__tokenProperty',
    doctype: 'TextEditor__tokenComment',
    entity: 'TextEditor__tokenOperator',
    function: 'TextEditor__tokenFunction',
    important: 'TextEditor__tokenVariable',
    inserted: 'TextEditor__tokenSelector',
    keyword: 'TextEditor__tokenAttr',
    namespace: 'TextEditor__tokenVariable',
    number: 'TextEditor__tokenProperty',
    operator: 'TextEditor__tokenOperator',
    prolog: 'TextEditor__tokenComment',
    property: 'TextEditor__tokenProperty',
    punctuation: 'TextEditor__tokenPunctuation',
    regex: 'TextEditor__tokenVariable',
    selector: 'TextEditor__tokenSelector',
    string: 'TextEditor__tokenSelector',
    symbol: 'TextEditor__tokenProperty',
    tag: 'TextEditor__tokenProperty',
    url: 'TextEditor__tokenOperator',
    variable: 'TextEditor__tokenVariable',
  },
  embedBlock: {
    base: 'TextEditor__embedBlock',
    focus: 'TextEditor__embedBlockFocus',
  },
  hashtag: 'TextEditor__hashtag',
  heading: {
    h1: 'TextEditor__h1',
    h2: 'TextEditor__h2',
    h3: 'TextEditor__h3',
    h4: 'TextEditor__h4',
    h5: 'TextEditor__h5',
    h6: 'TextEditor__h6',
  },
  image: 'TextEditor__image',
  indent: 'TextEditor__indent',
  link: 'TextEditor__link',
  list: {
    listitem: 'TextEditor__listItem',
    listitemChecked: 'TextEditor__listItemChecked',
    listitemUnchecked: 'TextEditor__listItemUnchecked',
    nested: {
      listitem: 'TextEditor__nestedListItem',
    },
    olDepth: [
      'TextEditor__ol1',
      'TextEditor__ol2',
      'TextEditor__ol3',
      'TextEditor__ol4',
      'TextEditor__ol5',
    ],
    ul: 'TextEditor__ul',
  },
  ltr: 'TextEditor__ltr',
  mark: 'TextEditor__mark',
  markOverlap: 'TextEditor__markOverlap',
  paragraph: 'TextEditor__paragraph',
  quote: 'TextEditor__quote',
  rtl: 'TextEditor__rtl',
  table: 'TextEditor__table',
  tableAddColumns: 'TextEditor__tableAddColumns',
  tableAddRows: 'TextEditor__tableAddRows',
  tableCell: 'TextEditor__tableCell',
  tableCellActionButton: 'TextEditor__tableCellActionButton',
  tableCellActionButtonContainer:
    'TextEditor__tableCellActionButtonContainer',
  tableCellEditing: 'TextEditor__tableCellEditing',
  tableCellHeader: 'TextEditor__tableCellHeader',
  tableCellPrimarySelected: 'TextEditor__tableCellPrimarySelected',
  tableCellResizer: 'TextEditor__tableCellResizer',
  tableCellSelected: 'TextEditor__tableCellSelected',
  tableCellSortedIndicator: 'TextEditor__tableCellSortedIndicator',
  tableResizeRuler: 'TextEditor__tableCellResizeRuler',
  tableSelected: 'TextEditor__tableSelected',
  text: {
    bold: 'TextEditor__textBold',
    code: 'TextEditor__textCode',
    italic: 'TextEditor__textItalic',
    strikethrough: 'TextEditor__textStrikethrough',
    subscript: 'TextEditor__textSubscript',
    superscript: 'TextEditor__textSuperscript',
    underline: 'TextEditor__textUnderline',
    underlineStrikethrough: 'TextEditor__textUnderlineStrikethrough',
  },
};

export default theme;
