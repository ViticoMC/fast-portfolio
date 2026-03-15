import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { forwardRef, useRef, useMemo, useLayoutEffect, useEffect } from "react";
import { Color } from "three";

const hexToNormalizedRGB = (hex) => {
  hex = hex.replace("#", "");
  return [
    parseInt(hex.slice(0, 2), 16) / 255,
    parseInt(hex.slice(2, 4), 16) / 255,
    parseInt(hex.slice(4, 6), 16) / 255,
  ];
};

const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform vec3  uColor;
uniform vec3  uBackgroundColor; // Nuevo uniform para el fondo
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;

const float e = 2.71828182845904523536;

float noise(vec2 texCoord) {
  float G = e;
  vec2  r = (G * sin(G * texCoord));
  return fract(r.x * r.y * (1.0 + texCoord.x));
}

vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  mat2  rot = mat2(c, -s, s, c);
  return rot * uv;
}

void main() {
  float rnd        = noise(gl_FragCoord.xy);
  vec2  uv         = rotateUvs(vUv * uScale, uRotation);
  vec2  tex        = uv * uScale;
  float tOffset    = uSpeed * uTime;

  tex.y += 0.03 * sin(8.0 * tex.x - tOffset);

  float pattern = 0.6 +
                  0.4 * sin(5.0 * (tex.x + tex.y +
                                   cos(3.0 * tex.x + 5.0 * tex.y) +
                                   0.02 * tOffset) +
                           sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

  // Usamos el uniform uBackgroundColor en lugar de blanco estático
  vec3 finalRGB = mix(uBackgroundColor, uColor, pattern);
  
  // Aplicamos el grano del ruido sobre el resultado final
  finalRGB -= (rnd / 15.0 * uNoiseIntensity);

  gl_FragColor = vec4(finalRGB, 1.0);
}
`;

const SilkPlane = forwardRef(function SilkPlane({ uniforms }, ref) {
  const { viewport } = useThree();

  // Forzamos la escala al tamaño del viewport
  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.scale.set(viewport.width, viewport.height, 1);
    }
  }, [viewport.width, viewport.height]);

  useFrame((state) => {
    if (ref.current && ref.current.material) {
      // Usamos el clock interno de Three para un movimiento constante
      ref.current.material.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent={true}
      />
    </mesh>
  );
});
SilkPlane.displayName = "SilkPlane";

const Silk = ({
  speed = 0.2,
  scale = 1.5,
  color = "#430994",
  backgroundColor = "#ffffff", // Nueva prop
  noiseIntensity = 1.0,
  rotation = 0,
}) => {
  const meshRef = useRef();

  const uniformsRef = useRef({
    uSpeed: { value: speed },
    uScale: { value: scale },
    uNoiseIntensity: { value: noiseIntensity },
    uColor: { value: new Color(color) },
    uBackgroundColor: { value: new Color(backgroundColor) }, // Inicialización del uniform
    uRotation: { value: rotation },
    uTime: { value: 0 },
  });

  useEffect(() => {
    const u = uniformsRef.current;
    if (u) {
      u.uSpeed.value = speed;
      u.uScale.value = scale;
      u.uNoiseIntensity.value = noiseIntensity;
      u.uRotation.value = rotation;
      u.uColor.value.set(color);
      u.uBackgroundColor.value.set(backgroundColor); // Actualización dinámica
    }
  }, [speed, scale, noiseIntensity, color, backgroundColor, rotation]);

  return (
    <div className="absolute inset-0 -z-10 w-full h-full">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 1], fov: 50 }}
        style={{ background: backgroundColor }} // Sincroniza el fondo del Canvas
      >
        <SilkPlane ref={meshRef} uniforms={uniformsRef.current} />
      </Canvas>
    </div>
  );
};

export default Silk;
