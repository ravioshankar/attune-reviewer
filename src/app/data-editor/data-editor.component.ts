import { Component, OnInit, ChangeDetectionStrategy, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MonacoEditorComponent, MonacoEditorConstructionOptions, MonacoEditorLoaderService, MonacoStandaloneCodeEditor } from '@materia-ui/ngx-monaco-editor';
import { filter, take } from 'rxjs';
import GeoJSON from 'ol/format/GeoJSON';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataEditorComponent {

  @ViewChild(MonacoEditorComponent, { static: false })
  monacoComponent: MonacoEditorComponent| any;
  editorOptions: MonacoEditorConstructionOptions = {
    theme: 'myCustomTheme',
    language: 'html',
    roundedSelection: true,
    autoIndent: 'full',
  };
  code = this.getCode();
  reactiveForm: FormGroup;
  modelUri: monaco.Uri|any;
  data = {
    type: 'FeatureCollection',
    crs: {
      type: 'name',
      properties: {
        name: 'EPSG:3857',
      },
    },
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [0, 0],
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [4e6, -2e6],
            [8e6, 2e6],
          ],
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [4e6, 2e6],
            [8e6, -2e6],
          ],
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [-5e6, -1e6],
              [-4e6, 1e6],
              [-3e6, -1e6],
            ],
          ],
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'MultiLineString',
          coordinates: [
            [
              [-1e6, -7.5e5],
              [-1e6, 7.5e5],
            ],
            [
              [1e6, -7.5e5],
              [1e6, 7.5e5],
            ],
            [
              [-7.5e5, -1e6],
              [7.5e5, -1e6],
            ],
            [
              [-7.5e5, 1e6],
              [7.5e5, 1e6],
            ],
          ],
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            [
              [
                [-5e6, 6e6],
                [-5e6, 8e6],
                [-3e6, 8e6],
                [-3e6, 6e6],
              ],
            ],
            [
              [
                [-2e6, 6e6],
                [-2e6, 8e6],
                [0, 8e6],
                [0, 6e6],
              ],
            ],
            [
              [
                [1e6, 6e6],
                [1e6, 8e6],
                [3e6, 8e6],
                [3e6, 6e6],
              ],
            ],
          ],
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'GeometryCollection',
          geometries: [
            {
              type: 'LineString',
              coordinates: [
                [-5e6, -5e6],
                [0, -5e6],
              ],
            },
            {
              type: 'Point',
              coordinates: [4e6, -5e6],
            },
            {
              type: 'Polygon',
              coordinates: [
                [
                  [1e6, -6e6],
                  [2e6, -4e6],
                  [3e6, -6e6],
                ],
              ],
            },
          ],
        },
      },
    ],
  };
  @Output()
  geojsonData = new EventEmitter<GeoJSON>();

  @Output()
  clearMap = new EventEmitter();

  @Input() 
  setInputData(data: GeoJSON) {
    this.reactiveForm = this.fb.group({
      code: [JSON.stringify(data)],
    });
  }
  constructor(
    private monacoLoaderService: MonacoEditorLoaderService,
    private fb: FormBuilder
  ) {
 
    this.reactiveForm = this.fb.group({
      code: [],
    });
    this.monacoLoaderService.isMonacoLoaded$
      .pipe(
        filter((isLoaded) => !!isLoaded),
        take(1)
      )
      .subscribe(() => {
        this.registerMonacoJsonSchemaValidator();
        this.registerMonacoCustomTheme();
      });
  }

  mergeOptions(partialOptions: any) {
    return {
      ...this.editorOptions,
      ...partialOptions,
    };
  }

  editorInit(editor: MonacoStandaloneCodeEditor) {
    // Programatic content selection example
    editor.setSelection({
      startLineNumber: 1,
      startColumn: 1,
      endColumn: 50,
      endLineNumber: 3,
    });
  }

  getCode() {
    return (
      // tslint:disable-next-line: max-line-length
      '<html><!-- // !!! Tokens can be inspected using F1 > Developer: Inspect Tokens !!! -->\n<head>\n	<!-- HTML comment -->\n	<style type="text/css">\n		/* CSS comment */\n	</style>\n	<script type="javascript">\n		// JavaScript comment\n	</' +
      'script>\n</head>\n<body></body>\n</html>'
    );
  }

  registerMonacoCustomTheme() {
    monaco.editor.defineTheme('myCustomTheme', {
      base: 'vs-dark', // can also be vs or hc-black
      inherit: true, // can also be false to completely replace the builtin rules
      rules: [
        {
          token: 'comment',
          foreground: 'ffa500',
          fontStyle: 'italic underline',
        },
        { token: 'comment.js', foreground: '008800', fontStyle: 'bold' },
        { token: 'comment.css', foreground: '0000ff' }, // will inherit fontStyle from `comment` above
      ],
      colors: {},
    });
  }

  registerMonacoJsonSchemaValidator() {
    // this.modelUri = monaco.Uri.parse('a://b/city.json');
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: true,
      schemas: [
        {
          uri: 'http://myserver/city-schema.json', // id of the first schema
          fileMatch: ['city*.json'],
          schema: {
            type: 'object',
            additionalProperties: false,
            properties: {
              city: {
                enum: ['Paris', 'Berlin', 'Boardman'],
              },
              country: {
                enum: ['France', 'Germany', 'United States'],
              },
              population: {
                type: 'integer',
              },
            },
          },
        },
      ],
    });
  }

  resetForm() {
    this.clearMap.emit(true);
    this.reactiveForm.reset();
  }

  onSubmit() {
    this.clearMap.emit(true);
    this.geojsonData.emit(
      JSON.parse(JSON.stringify(this.reactiveForm.value.code))
    );
  }
}
