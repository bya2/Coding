import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  // setupFilesAfterEnv: [""], // 테스트 파일이 실행되기 전에 Jest에 추가적으로 구성하기 위해 실행되는 모듈의 경로 목록 (Plugin - jest-plugin-context, @testing-library/jest-dom, given2)
};

export default config;
