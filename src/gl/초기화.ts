console.log(1);

const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
  let shader = gl.createShader(type) as WebGLShader; // 셰이더 생성
  gl.shaderSource(shader, source); // GLSL을 셰이더에 업로드
  gl.compileShader(shader); // 셰이더 컴파일

  let success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (!success) {
    console.log(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
  }

  return shader;
};

const clearCanvas = (gl: WebGLRenderingContext) => {
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);
};

const createProgram = (gl: WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader) => {
  let program = gl.createProgram() as WebGLProgram;
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  let success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (!success) {
    console.log(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
  }

  return program;
};

export const init = () => {
  // // 초기화 // //
  // 컨텍스트
  const canvas = document.querySelector("#c") as HTMLCanvasElement;
  const gl = canvas.getContext("webgl");
  if (!gl) {
    return;
  }

  // GLSL 불러오기
  const vertexShaderSource = ((document.querySelector("") as any).text as string) || "";
  const fragmentShaderSource = ((document.querySelector("") as any).text as string) || "";

  // 셰이더
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

  // 프로그램(두 셰이더 연결)
  const program = createProgram(gl, vertexShader, fragmentShader);

  // 속성 및 버퍼
  const ATTR_NAME = "a_position";
  const positionAttributeLocation = gl.getAttribLocation(program, ATTR_NAME);

  // 유니폼에 버퍼를 바인딩
  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  //
  const positions = [0, 0, 0, 0.5, 0.7, 0];
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  // // 렌더링 // //
  //
  // webglUtil;

  // gl_Position으로 설정할 클립 공간 값을 화면 공간으로 변환할 방식을 지시
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  // 캔버스 지우기
  clearCanvas(gl);

  // 프로그램(셰이더 쌍) 사용 지시
  gl.useProgram(program);

  // 버퍼에서 데이터를 가져와서 셰이더 속성에 제공하기 위해 - 속성 활성화
  gl.enableVertexAttribArray(positionAttributeLocation);

  // 버퍼에서 데이터를 가져와서 셰이더 속성에 제공하기 위해 - 데이터를 꺼내올 방법 지시
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  let size = 2; // 반복마다 N개의 컴포넌트
  let type = gl.FLOAT; // 데이터의 타입
  let normalized = false; // 데이터 정규화 여부
  let stride = 0; // 0 = 다음 위치를 가져오기 위해 반복마다 size * sizeof(type) 만큼 앞으로 이동
  let offset = 0; // 버퍼의 처음부터 시작
  gl.vertexAttribPointer(positionAttributeLocation, size, type, normalized, stride, offset); // 현재 바인딩된 ARRAY_BUFFER를 속성에 할당

  let primitiveType = gl.TRIANGLES;
  let first = 0;
  let count = 3;
  gl.drawArrays(primitiveType, first, count);
};
